import { useState } from "react";
import {
  type BevelryTheme,
  Button,
  Chronicle,
  type ChronicleEntryData,
  Dialog,
  DisplayTitle,
  ListButton,
  Menubar,
  StatRow,
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
          <Dialog title="SOCIETY.SYS" onMinimize={() => {}} onClose={() => {}}>
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

        <div className={styles.stack} style={{ width: "320px" }}>
          <Chronicle entries={CHRONICLE} live />
          <ListButton
            as="a"
            href="#"
            kicker="ARCHIVE"
            icon={
              <svg viewBox="0 0 16 16">
                <rect x="2" y="2" width="12" height="12" />
              </svg>
            }
          >
            View full chronicle →
          </ListButton>
        </div>
      </div>
    </ThemeProvider>
  );
}
