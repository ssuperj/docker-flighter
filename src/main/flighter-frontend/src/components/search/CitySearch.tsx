import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 200px;
  overflow: auto;
`;

export const load = async (text: string, file: string, idx_1: number, idx_2: number, target: number) => {
  let result;
  await fetch(`${process.env.PUBLIC_URL}/${file}`)
    .then((response) => response.arrayBuffer())
    .then((responseText) => {
      const decoder = new TextDecoder("EUC-KR");
      const csv = decoder.decode(responseText);
      result = parsing(csv, text, idx_1, idx_2, target);
    });
  return result;
};
export const parsing = (csv: string, text: string, idx_1: number, idx_2: number, target: number) => {
  let obj: any = [];
  const rows = csv.split("\r\n");
  for (let row of rows) {
    const data = row.split(",");
    const koreanData = data[idx_1];
    const IATA = data[idx_2];
    const regex = new RegExp(`^${text}`);
    if (regex.test(data[target])) {
      obj = [...obj, { data1: koreanData, data2: IATA }];
    }
  }
  return obj;
};

const CitySearch = (props: any) => {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    if (props.searchData.length !== 0) {
      load(props.searchData, "airportcode.csv", 1, 2, 1).then((resp) => {
        setData(resp!);
      });
    }
  }, [props.searchData]);

  const defaultValue = (
    <>
      <Dropdown.Item data-iata={"ICN"}>인천 국제공항</Dropdown.Item>
      <Dropdown.Item data-iata={"GMP"}>김포 국제공항</Dropdown.Item>
      <Dropdown.Item data-iata={"CJU"}>제주 국제공항</Dropdown.Item>
      <Dropdown.Item>해외 공항은 검색 해주세요</Dropdown.Item>
    </>
  );

  const searchValue = (
    <>
      {data.map((result: any, index: any) => (
        <Dropdown.Item key={index} data-iata={result.data2}>
          {result.data1}
        </Dropdown.Item>
      ))}
    </>
  );

  return <Wrapper>{data.length === 0 ? defaultValue : searchValue}</Wrapper>;
};
export default CitySearch;
