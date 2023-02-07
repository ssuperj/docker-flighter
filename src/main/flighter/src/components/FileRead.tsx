import fs from "fs";
const PATH = "../etc/airportcode.csv";

const FileRead = (props: any) => {
  fs.readFileSync(PATH, "utf-8");
  return <></>;
};
export default FileRead;
