import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 200px;
  overflow: auto;
`;

const load = async (text: string) => {
  let result;
  await fetch(`${process.env.PUBLIC_URL}/airportcode.csv`)
    .then((response) => response.arrayBuffer())
    .then((responseText) => {
      const decoder = new TextDecoder("EUC-KR");
      const csv = decoder.decode(responseText);
      result = parsing(csv, text);
    });
  return result;
};
const parsing = (csv: string, text: string) => {
  let obj: any = [];
  const rows = csv.split("\r\n");
  for (let row of rows) {
    const data = row.split(",");
    const koreanData = data[1];
    const IATA = data[2];
    const regex = new RegExp(`^${text}`);
    if (regex.test(koreanData)) {
      obj = [...obj, { content: koreanData, IATA: IATA }];
    }
  }
  return obj;
};

const CitySearch = (props: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    props.searchData.length !== 0 &&
      load(props.searchData).then((resp) => {
        setData(resp!);
      });
  }, [props.searchData]);

  const defaultValue = (
    <>
      <Dropdown.Item data-iata={"ICN"}>인천 국제공항</Dropdown.Item>
      <Dropdown.Item data-iata={"GMP"}>김포 국제공항</Dropdown.Item>
      <Dropdown.Item data-iata={"CJU"}>제주 국제공항</Dropdown.Item>
    </>
  );

  const searchValue = (
    <>
      {data.map((result: any, index) => (
        <Dropdown.Item key={index} data-iata={result.IATA}>
          {result.content}
        </Dropdown.Item>
      ))}
    </>
  );

  return <Wrapper>{data.length === 0 ? defaultValue : searchValue}</Wrapper>;
};
export default CitySearch;
