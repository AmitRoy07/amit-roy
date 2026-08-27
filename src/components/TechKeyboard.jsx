import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

const categoryKeys = ["esc", "tab", "caps", "shift"];

const TechKey = ({ item, isActive, onSelect, onKeySound }) => (
  <button
    type="button"
    className={`tech-key ${isActive ? "tech-key--active" : ""}`}
    onPointerDown={onKeySound}
    onClick={() => onSelect(item)}
    aria-pressed={isActive}
    aria-label={`${item.name} technology`}
    title={item.name}
  >
    <Icon icon={item.icon} className="tech-key__icon" />
    <span className="tech-key__label">{item.name}</span>
  </button>
);

const TechKeyboard = ({ categories }) => {
  const firstItem = categories[0]?.items[0] ?? null;
  const [activeItem, setActiveItem] = useState(firstItem);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const soundPoolRef = useRef([]);
  const soundIndexRef = useRef(0);

  useEffect(() => {
    soundPoolRef.current = Array.from({ length: 4 }, () => {
      const sound = new Audio(
        "/assets/images/sound/freesound_community-mech-keyboard-02-102918.mp3"
      );
      sound.preload = "auto";
      sound.volume = 0.5;
      return sound;
    });

    return () => {
      soundPoolRef.current.forEach((sound) => {
        sound.pause();
        sound.removeAttribute("src");
        sound.load();
      });
      soundPoolRef.current = [];
    };
  }, []);

  const playKeySound = useCallback(() => {
    if (!soundEnabled) return;

    const sounds = soundPoolRef.current;
    if (sounds.length === 0) return;

    const sound = sounds[soundIndexRef.current % sounds.length];
    soundIndexRef.current += 1;
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }, [soundEnabled]);

  return (
    <div className="tech-keyboard-scroll" data-lenis-prevent>
      <div className="tech-keyboard" role="group" aria-label="Interactive technology keyboard">
        <div className="tech-keyboard__topbar">
          <div>
            <p className="tech-keyboard__eyebrow">Amit Roy / toolkit</p>
            <p className="tech-keyboard__status" aria-live="polite">
              {activeItem?.name ?? "Select a key"}
            </p>
          </div>
          <button
            type="button"
            className={`tech-keyboard__sound ${soundEnabled ? "tech-keyboard__sound--on" : ""}`}
            onClick={() => setSoundEnabled((current) => !current)}
            aria-pressed={soundEnabled}
            aria-label={`${soundEnabled ? "Mute" : "Enable"} keyboard sounds`}
            title={`${soundEnabled ? "Mute" : "Enable"} keyboard sounds`}
          >
            <Icon icon={soundEnabled ? "lucide:volume-2" : "lucide:volume-x"} />
            <span>{soundEnabled ? "Sound on" : "Sound off"}</span>
          </button>
        </div>

        <div className="tech-keyboard__rows">
          {categories.map((category, categoryIndex) => (
            <div className="tech-keyboard__row" key={category.title}>
              <div className="tech-key tech-key--modifier" aria-hidden="true">
                <Icon
                  icon={categoryIndex === 0 ? "lucide:terminal" : category.items[0].icon}
                  className="tech-key__modifier-icon"
                />
                <span>{categoryKeys[categoryIndex] ?? "fn"}</span>
                <strong>{category.title}</strong>
              </div>

              {category.items.map((item) => (
                <TechKey
                  key={item.name}
                  item={item}
                  isActive={activeItem?.name === item.name}
                  onSelect={setActiveItem}
                  onKeySound={playKeySound}
                />
              ))}

              <div className="tech-key tech-key--return" aria-hidden="true">
                <Icon icon="lucide:corner-down-left" />
                <span>{categoryIndex === categories.length - 1 ? "ship" : "return"}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-keyboard__footer" aria-hidden="true">
          <div className="tech-key tech-key--utility">fn</div>
          <div className="tech-key tech-key--utility">
            <Icon icon="lucide:chevron-up" />
            ctrl
          </div>
          <div className="tech-key tech-key--utility">
            <Icon icon="lucide:code-2" />
            code
          </div>
          <div className="tech-key tech-key--space">
            <span>design</span>
            <strong>build • animate • ship</strong>
            <span>develop</span>
          </div>
          <div className="tech-key tech-key--utility">
            <Icon icon="lucide:git-branch" />
            git
          </div>
          <div className="tech-key tech-key--arrows">
            <span className="tech-arrow-key tech-arrow-key--up">
              <Icon icon="lucide:chevron-up" />
            </span>
            <span className="tech-arrow-key tech-arrow-key--left">
              <Icon icon="lucide:chevron-left" />
            </span>
            <span className="tech-arrow-key tech-arrow-key--down">
              <Icon icon="lucide:chevron-down" />
            </span>
            <span className="tech-arrow-key tech-arrow-key--right">
              <Icon icon="lucide:chevron-right" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechKeyboard;
