import { useState } from "react";
import {
  type BevelryTheme,
  Button,
  Checkbox,
  Chronicle,
  type ChronicleEntryData,
  Dialog,
  DisplayTitle,
  Divider,
  Fieldset,
  Glyph,
  ListButton,
  Menubar,
  Radio,
  RadioGroup,
  Select,
  StatRow,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TextArea,
  TextInput,
  ThemeProvider,
} from "../src";
import * as styles from "./App.css";

const THEMES: BevelryTheme[] = ["mono", "terminal", "parchment", "blueprint"];

const CHRONICLE: ChronicleEntryData[] = [
  { id: "e1", meta: "EPOCH 0", body: "The Silent Choir is founded beneath Cear Ferros by seven forge-blind vintners." },
  { id: "e2", meta: "EPOCH 3", body: "Brother Ansellm binds the first oath-bell; two vintners forget their own names." },
  { id: "e3", meta: "EPOCH 7", body: "A schism: the Choir splits over whether silence may be sung." },
  { id: "e4", meta: "EPOCH 11", body: "The younger sect reconciles, bringing back a doctrine of measured hymns." },
  { id: "e5", meta: "EPOCH 14", body: "Membership crosses forty. The Choir petitions Vilheim for a chapter house." },
];

export default function App() {
  const [theme, setTheme] = useState<BevelryTheme>("mono");

  return (
    <ThemeProvider theme={theme} className={styles.page}>
      <DisplayTitle style={{ fontSize: "clamp(36px, 6vw, 56px)" }}>Bevelry</DisplayTitle>

      <div className={styles.themeRow}>
        {THEMES.map((t) => (
          <Button key={t} emphasis={t === theme ? "default" : "plain"} onClick={() => setTheme(t)}>
            {t}
          </Button>
        ))}
      </div>

      <div className={styles.columns}>
        <div className={styles.stack}>
          <Dialog title="SOCIETY.SYS">
            <div className={styles.dialogBody}>
              <StatRow label="Founded">Epoch 0, Cear Ferros</StatRow>
              <StatRow label="Doctrine">Measured Hymns</StatRow>
              <StatRow label="Members">41</StatRow>
              <TextInput id="seed" label="Seed" placeholder="42" defaultValue="42" />
              <div className={styles.buttonRow}>
                <Button emphasis="default">Generate</Button>
                <Button emphasis="plain">Reset</Button>
              </div>
            </div>
          </Dialog>

          <Menubar
            items={[
              { key: "society", label: "SOCIETY" },
              { key: "rites", label: "RITES" },
              { key: "archive", label: "ARCHIVE" },
              { key: "help", label: "?", align: "end" },
            ]}
          />
        </div>

        <div className={styles.stack} style={{ width: "340px" }}>
          <Tabs defaultValue="rite">
            <TabList>
              <Tab value="rite">RITE</Tab>
              <Tab value="members">MEMBERS</Tab>
            </TabList>
            <TabPanel value="rite">
              <Fieldset legend="Rite of Induction">
                <div className={styles.formStack}>
                  <RadioGroup direction="column">
                    <Radio value="vow" defaultChecked>
                      Silent Vow
                    </Radio>
                    <Radio value="bell">Oath-Bell</Radio>
                    <Radio value="hymn">Measured Hymn</Radio>
                  </RadioGroup>
                  <Select id="officiant" label="Officiant" defaultValue="ansellm">
                    <option value="ansellm">Brother Ansellm</option>
                    <option value="wren">Sister Wren</option>
                    <option value="">Vacant</option>
                  </Select>
                  <Checkbox id="public" defaultChecked>
                    Open to the public
                  </Checkbox>
                  <TextArea id="notes" label="Notes" placeholder="The candidate arrived at dusk…" rows={3} />
                  <Divider />
                  <div className={styles.buttonRow}>
                    <Button emphasis="default">Record Rite</Button>
                  </div>
                </div>
              </Fieldset>
            </TabPanel>
            <TabPanel value="members">
              {/* No extra <Panel> here — TabPanel already renders its own bordered box; nesting one inside the other just doubled the border/padding. */}
              <div className={styles.formStack}>
                <Chronicle entries={CHRONICLE} />
                <ListButton as="a" href="#" kicker="ARCHIVE">
                  View full chronicle →
                </ListButton>
                <ListButton as="a" href="#" kicker="DISCORD" icon={<Glyph name="sun" size="17px" />}>
                  discord.gg/the-silent-choir-of-cear-ferros
                </ListButton>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </ThemeProvider>
  );
}
