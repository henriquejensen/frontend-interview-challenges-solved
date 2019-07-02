import React from "react";
import { ContainerTitleBox } from "../components/container-title-box";
import { FinancialInfo } from "../components/financial-info";

function FinancialInfoContainer() {
  return (
    <ContainerTitleBox title="Financial information">
      <>
        <FinancialInfo
          title="Purchased"
          value="$100,000,000"
          date="(13/12/2019, Aguda)"
          payements="99.50% payements to buyer done"
        />
        <FinancialInfo
          title="Sold"
          value="$150,000,000"
          gain="+17.5%"
          date="(13/12/2019, Moruf Bello)"
          payements="104.3% payements from seller done"
        />
      </>
    </ContainerTitleBox>
  );
}

export default FinancialInfoContainer;
