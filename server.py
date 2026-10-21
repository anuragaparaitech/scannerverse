# Scannerverse Local Development Server
import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000
HOST = "127.0.0.1"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class ScannerverseHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def log_message(self, format, *args):
        # Clean request logging
        sys.stdout.write("%s - - [%s] %s\n" % (self.client_address[0], self.log_date_time_string(), format % args))

def start_server():
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer((HOST, PORT), ScannerverseHandler) as httpd:
            url = f"http://localhost:{PORT}"
            print("\n" + "=" * 50)
            print("  🌐 Scannerverse Local Server Running!")
            print(f"  👉 Open URL: {url}")
            print(f"  👉 Direct IP: http://{HOST}:{PORT}")
            print("  Press Ctrl+C to stop the server.")
            print("=" * 50 + "\n")
            
            # Automatically launch in default browser
            webbrowser.open(url)
            httpd.serve_forever()
    except OSError as e:
        if "address already in use" in str(e).lower() or e.errno == 98 or e.errno == 10048:
            alt_port = 8080
            print(f"Port {PORT} is busy, switching to http://localhost:{alt_port} ...")
            with socketserver.TCPServer((HOST, alt_port), ScannerverseHandler) as httpd:
                webbrowser.open(f"http://localhost:{alt_port}")
                httpd.serve_forever()
        else:
            raise e
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == "__main__":
    start_server()
