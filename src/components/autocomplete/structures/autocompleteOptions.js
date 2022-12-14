import React from "react";

export default function AutocompleteOptions() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          {/* Put here the component name */}
          Autocomplete Options
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
                {`<bds-autocomplete options='[
                  {"value": "1", "label": "Millie Bobby"}, 
                  {"value": "2", "label": "Finn Wolfhard"}, 
                  {"value": "3", "label": "David Harbour"}, 
                  {"value": "4", "label": "Gaten Matarazzo"}, 
                  {"value": "5", "label": "Caleb McLaughlin"}, 
                  {"value": "6", "label": "Noah Schnapp"}]'>
  </bds-autocomplete>`}
              </pre>
            </code>
          </bds-typo>
        </bds-grid>
      </bds-paper>
</bds-grid>
      
      <bds-grid xxs="12" direction="column" gap="1">
        <bds-typo bold="bold">The component</bds-typo>
        <bds-paper>
           {/* Put here the component example */}
           <bds-autocomplete options='[{"value": "1", "label": "Millie Bobby"}, {"value": "2", "label": "Finn Wolfhard"}, {"value": "3", "label": "David Harbour"}, {"value": "4", "label": "Gaten Matarazzo"}, {"value": "5", "label": "Caleb McLaughlin"}, {"value": "6", "label": "Noah Schnapp"}]'>
  </bds-autocomplete>
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
