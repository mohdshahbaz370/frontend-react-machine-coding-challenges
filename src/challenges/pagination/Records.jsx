import React from "react";

const Records = ({ data, loading }) => {
  return loading ? (
    loading
  ) : (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((itm) => (
          <tr key={itm.id}>
            <td>{itm.id}</td>
            <td>{itm.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Records;
