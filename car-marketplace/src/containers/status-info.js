import React from "react";
import { ContainerTitleBox } from "../components/container-title-box";
import { Dropdown } from "../components/dropdown";

const physicalStatus = ["At buyer", "physical 1", "physical 2"];
const legalStatus = ["Buyer", "legal 1", "legal 2"];
const sellerStatus = ["Sold", "seller 1", "seller 2"];

function StatusInfoContainer() {
  return (
    <ContainerTitleBox title="Status">
      <>
        <Dropdown label="Physical status" options={physicalStatus} />
        <Dropdown label="Legal status" options={legalStatus} />
        <Dropdown label="Seller status" options={sellerStatus} />
      </>
    </ContainerTitleBox>
  );
}

export default StatusInfoContainer;
