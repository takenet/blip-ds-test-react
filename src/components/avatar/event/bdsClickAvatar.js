import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ClickEvent() {
  // Put here the event function

  const [result, setResult] = useState(false);

  useEffect(() => {
    const element = document.getElementById("clickAvatar");
    element.addEventListener("bdsClickAvatar", () => {
      setResult(true);
    })
  });

  return (
    <bds-grid
      xxs="12"
      direction="column"
      gap="4"
      margin="y-8"
      align-items="center"
    >
      <bds-grid direction="column" xxs="12" align-items="center">
        <bds-grid xxs="12" direction="column">
          <bds-typo class="title-2" variant="fs-24" bold="bold">
            {/* Put here the event name */}
            bdsClickAvatar
          </bds-typo>
          <hr />
          <bds-banner context="inside" variant="error">The event does nothing, will be fixed.</bds-banner>
        </bds-grid>
        <bds-grid xxs="12" justify-content="center">
          <bds-grid
            xxs="12"
            direction="column"
            gap="4"
            justify-content="space-around"
            margin="t-3"
          >
            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The component using the event</bds-typo>
              <bds-grid padding="x-3">
              <bds-avatar name="Michael Scott" size="standard" upload="true" id="clickAvatar">
    </bds-avatar>
                {result ? (
                  <motion.div
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                  >
                    <bds-paper>
                      <bds-grid padding="2" justify-content="center">
                        <bds-typo>
                          This text appeared as a result of the
                          bdsComponentEvent event
                        </bds-typo>
                      </bds-grid>
                    </bds-paper>
                  </motion.div>
                ) : (
                  ""
                )}
              </bds-grid>
            </bds-grid>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">
                The component code using the event
              </bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>{`<bds-avatar name="Michael Scott" size="standard" upload="true" id="clickAvatar">
</bds-avatar>`}</pre>
                    </code>
                  </bds-typo>
                </bds-grid>
              </bds-paper>
            </bds-grid>

            <bds-grid direction="column" gap="1">
              <bds-typo bold="bold">The function</bds-typo>
              <bds-paper>
                <bds-grid padding="x-3">
                  <bds-typo variant="fs-14" bold="regular">
                    <code>
                      <pre>
                        {`  const [result, setResult] = useState(false);

useEffect(() => {
  const element = document.getElementById("clickAvatar");
  element.addEventListener("bdsClickAvatar", () => {
    setResult(true);
  })
});`}
                      </pre>
                    </code>
                  </bds-typo>
                </bds-grid>
              </bds-paper>
            </bds-grid>
          </bds-grid>
        </bds-grid>
      </bds-grid>
    </bds-grid>
  );
}
