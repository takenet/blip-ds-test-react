import React from "react";
import { Link } from "react-router-dom";
import CloseMethod from "./method/closeMethod";
import ToggleMethod from "./method/toggleMethod";
import AccordionDefault from "./structures/AccordionDefault";
import AccordionGroupMultipleOpen from "./structures/AccordionGroupMultipleOpen";
import AccordionGroupSingleOpen from "./structures/AccordionGroupSingleOpen";

export default function Accordion() {
  return (
    <>
      <bds-grid container xxs="12" justify-content="center" direction="column">

        <bds-grid margin="b-8" padding="t-3" justify-content="space-between" align-items="center">
          <Link to="/">
          <bds-button-icon size="short" variant="secondary" icon="arrow-left"></bds-button-icon>
          </Link>
          
          <bds-typo variant="fs-32" italic bold="extra-bold" margin="false">
            Componente Accordion
          </bds-typo>
          <bds-grid>
            <bds-grid padding="l-2">
              <bds-typo variant="fs-14">Status:</bds-typo>
            </bds-grid>
            <bds-chip-tag color="success">Funcionando</bds-chip-tag>
          </bds-grid>
        </bds-grid>

        <bds-tabs align="left">
          <bds-tab group="tab1" label="Structures"></bds-tab>
          <bds-tab group="tab2" label="Method"></bds-tab>
        </bds-tabs>
        <bds-grid xxs="11" margin="auto">
          <hr />
        </bds-grid>
        
        <bds-tab-panel group="tab1">
          <AccordionDefault />
          <AccordionGroupSingleOpen />
          <AccordionGroupMultipleOpen />
        </bds-tab-panel>
        <bds-tab-panel group="tab2">
          <ToggleMethod />
          <CloseMethod />
          </bds-tab-panel>
        
      </bds-grid>
    </>
  );
}
