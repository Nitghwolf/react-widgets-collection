import { FC } from "react";
import "./index.css";

const ImageConverter: FC = () => {
  const convert: any = {
    // (A) PROPERTIES
    reader: null, // file reader
    img: null, // selected image

    // (B) READ SELECTED IMAGE
    read: () => {
      convert.reader = new FileReader();
      convert.reader.onload = convert.obj;
      convert.reader.readAsDataURL(
        (document?.getElementById("cFile") as any)?.files[0]
      );
      return false;
    },

    // (C) SELECTED IMAGE TO OBJECT
    obj: () => {
      convert.img = new Image();
      convert.img.onload = convert.go;
      convert.img.src = convert.reader.result;
    },

    // (D) CONVERT & DOWNLOAD
    go: () => {
      // (D1) CREATE EMPTY CANVAS
      let canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");

      // (D2) DRAW IMAGE ONTO CANVAS
      canvas.width = convert.img.width;
      canvas.height = convert.img.height;
      ctx?.drawImage(convert.img, 0, 0);

      // (D3) GET SELECTED IMAGE FORMAT
      let format: any = (document?.getElementById("cFormat") as any)?.value,
        ext = format == "jpeg" ? "jpg" : format;

      // (D4) CONVERT & "FORCE DOWNLOAD"
      let a = document.createElement("a");
      a.href = canvas.toDataURL(`image/${format}`);
      a.download = `converted.${ext}`;
      a.click();
      a.remove();
    },
  };

  const onsubmit = (e: any) => {
    e.preventDefault();
    return convert.read();
  };

  return (
    <div className="container-ImageConverter">
      <div id="cbwrap">
        <h1 id="cbtitle">Convert Image Format</h1>

        <form id="cForm" onSubmit={onsubmit}>
          <label>SELECT FORMAT</label>
          <select id="cFormat">
            <option value="webp">WEBP</option>
            <option value="jpeg">JPG</option>
            <option value="png">PNG</option>
            <option value="gif">GIF</option>
          </select>

          <label>CHOOSE FILE</label>
          <input type="file" id="cFile" accept="image/*" required />

          <input type="submit" value="Go" />
        </form>
      </div>
    </div>
  );
};

export default ImageConverter;