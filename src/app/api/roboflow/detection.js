import { colors } from "@/constants";
import {
  CanvasRenderingContext2D,
  createCanvas,
  loadImage,
  registerFont,
} from "canvas";

const drawBoundingBox = (imgWidth, imgHeight, data, context) => {
  const { predictions } = data;
  predictions.forEach((prediction) => {
    const {
      x,
      y,
      width,
      height,
      class: label,
      class_id,
      confidence,
    } = prediction;
    const topLeftX = x - width / 2;
    const topLeftY = y - height / 2;
    context.strokeStyle = colors[class_id];
    context.lineWidth = (Math.sqrt(imgWidth * imgHeight) / 250) * 2;
    context.strokeRect(topLeftX, topLeftY, width, height);

    // const textHeight = (Math.sqrt(imgWidth * imgHeight) / 200) * 2;

    // // Calculate text positioning
    // const textPadding = (Math.sqrt(imgWidth * imgHeight) / 300) * 10; // Adjust padding as needed
    // const textX = topLeftX; // Position text at top-left with padding
    // const textY = topLeftY + textPadding; // Position text below top edge with padding

    // // Draw text background (consider adjusting based on text dimensions)
    // context.fillStyle = colors[class_id];
    // context.fillRect(textX, topLeftY, width, textHeight + textPadding); // Draw background rectangle

    // // Draw class and confidence text
    // context.fillStyle = "white";
    // const fontSize = (Math.sqrt(imgWidth * imgHeight) / 300) * 11;
    // context.font = `${fontSize}px Arial`; // Adjust font size and style as needed
    // context.fillText(
    //   `${label} ${(confidence * 100).toFixed(1)}%`,
    //   textX,
    //   textY
    // );
  });
};

export const detectPlants = async (data, imageUrl) => {
  try {
    // Create canvas and load image
    const imgWidth = data.image.width;
    const imgHeight = data.image.height;
    const canvas = createCanvas(imgWidth, imgHeight);

    const context = canvas.getContext("2d");
    const imageData = await loadImage(imageUrl);
    context.drawImage(imageData, 0, 0);

    // Draw bounding box(es)
    drawBoundingBox(imgWidth, imgHeight, data, context);

    // Save the image with bounding box
    const buffer = canvas.toBuffer("image/jpeg");
    const output = `data:image/png;base64,${buffer.toString("base64")}`;

    return output;
  } catch (error) {
    console.error(error.message);
  }
};
