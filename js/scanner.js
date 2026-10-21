// Scannerverse - QR Code Scanner & Generator Engine
// Built using jsQR and QRCode.js (standalone, no external network needed)

class QRScannerEngine {
  constructor() {
    this.videoStream = null;
    this.isScanning = false;
    this.animationFrameId = null;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });
    
    this.videoElement = document.getElementById("scannerVideo");
    this.overlayCanvas = document.getElementById("scannerOverlay");
    this.resultContainer = document.getElementById("scanResultContainer");
    this.resultText = document.getElementById("scanResultText");
    this.openLinkBtn = document.getElementById("scanOpenLinkBtn");
    this.copyBtn = document.getElementById("scanCopyBtn");
    this.cameraStatus = document.getElementById("cameraStatus");
    
    this.bindEvents();
  }

  bindEvents() {
    // File upload handler
    const fileInput = document.getElementById("qrFileInput");
    const dropZone = document.getElementById("qrDropZone");

    if (fileInput) {
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) this.decodeImageFile(file);
      });
    }

    if (dropZone) {
      dropZone.addEventListener("click", () => fileInput && fileInput.click());
      dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZone.classList.add("drag-hover");
      });
      dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("drag-hover");
      });
      dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dropZone.classList.remove("drag-hover");
        const file = e.dataTransfer.files[0];
        if (file) this.decodeImageFile(file);
      });
    }

    // Copy result button
    if (this.copyBtn) {
      this.copyBtn.addEventListener("click", () => {
        const text = this.resultText.textContent;
        if (text) {
          navigator.clipboard.writeText(text).then(() => {
            showToast(t("copiedToast") || "Copied to clipboard!");
          });
        }
      });
    }
  }

  async startCamera() {
    if (this.isScanning) return;

    try {
      if (this.cameraStatus) {
        this.cameraStatus.textContent = "Requesting camera access...";
        this.cameraStatus.style.display = "block";
      }

      const constraints = {
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      this.videoStream = await navigator.mediaDevices.getUserMedia(constraints);
      this.videoElement.srcObject = this.videoStream;
      this.videoElement.setAttribute("playsinline", true);
      await this.videoElement.play();

      this.isScanning = true;
      if (this.cameraStatus) this.cameraStatus.style.display = "none";
      
      const startBtn = document.getElementById("startCameraBtn");
      const stopBtn = document.getElementById("stopCameraBtn");
      if (startBtn) startBtn.style.display = "none";
      if (stopBtn) stopBtn.style.display = "inline-flex";

      this.scanLoop();
    } catch (err) {
      console.warn("Camera access error:", err);
      if (this.cameraStatus) {
        this.cameraStatus.textContent = "Camera unavailable or permission denied. Try uploading an image instead.";
        this.cameraStatus.style.display = "block";
      }
    }
  }

  stopCamera() {
    this.isScanning = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.videoStream) {
      this.videoStream.getTracks().forEach((track) => track.stop());
      this.videoStream = null;
    }

    if (this.videoElement) {
      this.videoElement.srcObject = null;
    }

    const startBtn = document.getElementById("startCameraBtn");
    const stopBtn = document.getElementById("stopCameraBtn");
    if (startBtn) startBtn.style.display = "inline-flex";
    if (stopBtn) stopBtn.style.display = "none";

    // Clear overlay
    if (this.overlayCanvas) {
      const ctx = this.overlayCanvas.getContext("2d");
      ctx.clearRect(0, 0, this.overlayCanvas.width, this.overlayCanvas.height);
    }
  }

  scanLoop() {
    if (!this.isScanning) return;

    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      const width = this.videoElement.videoWidth;
      const height = this.videoElement.videoHeight;

      this.canvas.width = width;
      this.canvas.height = height;
      this.ctx.drawImage(this.videoElement, 0, 0, width, height);

      const imageData = this.ctx.getImageData(0, 0, width, height);
      if (typeof jsQR !== "undefined") {
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert"
        });

        if (code && code.data) {
          this.handleScanSuccess(code.data);
          this.drawBoundingBox(code.location, width, height);
          this.stopCamera();
          return;
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.scanLoop());
  }

  drawBoundingBox(location, srcWidth, srcHeight) {
    if (!this.overlayCanvas) return;
    this.overlayCanvas.width = this.videoElement.clientWidth;
    this.overlayCanvas.height = this.videoElement.clientHeight;

    const ctx = this.overlayCanvas.getContext("2d");
    const scaleX = this.overlayCanvas.width / srcWidth;
    const scaleY = this.overlayCanvas.height / srcHeight;

    ctx.beginPath();
    ctx.moveTo(location.topLeftCorner.x * scaleX, location.topLeftCorner.y * scaleY);
    ctx.lineTo(location.topRightCorner.x * scaleX, location.topRightCorner.y * scaleY);
    ctx.lineTo(location.bottomRightCorner.x * scaleX, location.bottomRightCorner.y * scaleY);
    ctx.lineTo(location.bottomLeftCorner.x * scaleX, location.bottomLeftCorner.y * scaleY);
    ctx.closePath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#10b981"; // nice green
    ctx.stroke();
  }

  decodeImageFile(file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        this.ctx.drawImage(img, 0, 0);

        const imageData = this.ctx.getImageData(0, 0, img.width, img.height);
        if (typeof jsQR !== "undefined") {
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          if (code && code.data) {
            this.handleScanSuccess(code.data);
          } else {
            showToast("Could not detect a QR code in this image. Try another.");
          }
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  handleScanSuccess(data) {
    if (!this.resultContainer || !this.resultText) return;

    this.resultContainer.style.display = "block";
    this.resultText.textContent = data;

    const isUrl = /^https?:\/\//i.test(data);
    if (this.openLinkBtn) {
      if (isUrl) {
        this.openLinkBtn.style.display = "inline-flex";
        this.openLinkBtn.href = data;
      } else {
        this.openLinkBtn.style.display = "none";
      }
    }

    // Trigger subtle success sound
    this.playSuccessBeep();
  }

  playSuccessBeep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // AudioContext may not be available on all browsers without gesture
    }
  }
}

// QR Code Generator Helper
class QRGeneratorEngine {
  constructor() {
    this.qrCodeInstance = null;
    this.container = document.getElementById("generatedQrPreview");
    this.input = document.getElementById("qrInputText");
    this.downloadBtn = document.getElementById("downloadQrBtn");
    this.bindEvents();
  }

  bindEvents() {
    const genBtn = document.getElementById("generateQrSubmitBtn");
    if (genBtn) {
      genBtn.addEventListener("click", () => this.generate());
    }

    if (this.input) {
      this.input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.generate();
      });
    }

    if (this.downloadBtn) {
      this.downloadBtn.addEventListener("click", () => this.download());
    }
  }

  generate(customText) {
    const text = customText || (this.input ? this.input.value.trim() : "");
    if (!text) {
      showToast("Please enter some text or URL first!");
      return;
    }

    if (!this.container) return;
    this.container.innerHTML = "";

    if (typeof QRCode !== "undefined") {
      this.qrCodeInstance = new QRCode(this.container, {
        text: text,
        width: 220,
        height: 220,
        colorDark: "#0f172a",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });

      if (this.downloadBtn) {
        this.downloadBtn.style.display = "inline-flex";
      }
    }
  }

  download() {
    const img = this.container.querySelector("img");
    const canvas = this.container.querySelector("canvas");
    let url = "";

    if (img && img.src) {
      url = img.src;
    } else if (canvas) {
      url = canvas.toDataURL("image/png");
    }

    if (url) {
      const a = document.createElement("a");
      a.href = url;
      a.download = "scannerverse-qr.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast("QR Code downloaded!");
    }
  }
}

let qrScannerInstance = null;
let qrGeneratorInstance = null;

function initQrEngines() {
  qrScannerInstance = new QRScannerEngine();
  qrGeneratorInstance = new QRGeneratorEngine();
}
