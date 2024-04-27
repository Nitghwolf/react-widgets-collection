import { FC, useCallback, useRef, useState } from "react";
import "./index.css";

const QRCodeGenerator: FC = () => {
  const qrText = useRef<HTMLInputElement | null>(null);
  const [qrCode, setQrCode] = useState<JSX.Element | null>(null);

  const generateQR = useCallback(() => {
    const QRElement = (
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText.current?.value}`}
        alt="QR Code"
      />
    );
    setQrCode(QRElement);
    if (qrText.current) {
      qrText.current.value = "";
    }
  }, []);

  return (
    <div className="container-QRCodeGenerator">
      <h1>QR Code Generator</h1>
      <div className="button-conyainer">
        <input type="text" id="qr-text" placeholder="Enter text" ref={qrText} />
        <button onClick={generateQR}>Generate QR Code</button>
      </div>
      {qrCode}
    </div>
  );
};

export default QRCodeGenerator;