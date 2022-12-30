import React from "react";

export default function InputTextarea() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Input Textarea
        </bds-typo>
        <hr />
      </bds-grid>

      <bds-grid direction="column" gap="1" xxs="12">
        <bds-typo bold="bold">The structure HTML</bds-typo>
        <bds-paper>
          <bds-grid
            xxs="12"
            direction="column"
            padding="2"
            justify-content="center"
          >
            <bds-typo variant="fs-14" bold="regular">
              <code>
                <pre>
                  {`<div>
  <bds-input is-textarea rows="2"></bds-input>
  <bds-input is-textarea rows="2" icon="email"></bds-input>
  <bds-input is-textarea rows="2" danger></bds-input>
  <bds-input is-textarea rows="2" disabled></bds-input>
  <bds-input is-textarea rows="4"></bds-input>
</div>
`}
                </pre>
              </code>
            </bds-typo>
          </bds-grid>
        </bds-paper>
      </bds-grid>
      
      <bds-grid xxs="12" direction="column" gap="1">
        <bds-typo bold="bold">The component</bds-typo>
        <bds-paper>
          <bds-grid padding="3" direction="column" gap="3">
            {/* Put here the component example */}
            <bds-input is-textarea rows="2"></bds-input>
            <bds-input is-textarea rows="2" icon="email"></bds-input>
            <bds-input is-textarea rows="2" danger></bds-input>
            <bds-input is-textarea rows="2" disabled></bds-input>
            <bds-input is-textarea rows="4"></bds-input>
          </bds-grid>
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
