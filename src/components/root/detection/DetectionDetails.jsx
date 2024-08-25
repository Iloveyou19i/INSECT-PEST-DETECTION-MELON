import DetectionsContainer from "@/components/global/DetectionsContainer";
import { toMs } from "@/lib/utils";

const DetectionDetails = ({ data }) => {
  return (
    <div className={`${Object.entries(data).length === 0 && "hidden"}`}>
      <div>
        <h4 className="title">Details</h4>
        <p className="text-sm">
          Inference Time:{" "}
          <span className="font-bold text-primary">{toMs(data.time)}</span>
        </p>
      </div>
      <DetectionsContainer detections={data.predictions} />
    </div>
  );
};

export default DetectionDetails;
