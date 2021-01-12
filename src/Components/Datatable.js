import React, { useState, useEffect } from "react";
import { Card, Table } from "antd";
import axios from "axios";
import "./Dashboard.css";

function Datatable() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    {
      const url = `https://calendarific.com/api/v2/holidays?&api_key=dda734546b03f0fedd3299fb64adab93ffa8d324&country=IN&year=2021`;
      axios
        .get(url)
        .then((res) => {
          console.log("useEffect", res.data.response.holidays);
          setdata(res.data.response.holidays);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["md"],
      ellipsis: true,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => <p>{date.iso}</p>,
    },
    {
      title: "Country",
      key: "country",
      dataIndex: "country",
      render: (country) => <p>{country.name}</p>,
    },
    {
      title: "Locations",
      key: "locations",
      dataIndex: "locations",
    },
  ];

  return (
    <div>
      <Card
        className="datatable"
        title="Datatable"
        headStyle={{ color: "#4e73df", float: "left" }}
      >
        <Table bordered columns={columns} dataSource={data} size="small" />
      </Card>
    </div>
  );
}

export default Datatable;
