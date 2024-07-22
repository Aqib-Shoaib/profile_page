import { useState } from "react";
import Profile from "./Profile";
import Projects from "./Projects";
import History from "./History";
import Certifications from "./Certifications";
import styled from "styled-components";
import {
  IconHistoryToggle,
  IconLayout2,
  IconPhone,
  IconRosetteDiscountCheck,
  IconUserSearch,
} from "@tabler/icons-react";
import Contact from "./Contact";
import Icon from "./Icon";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7.5rem;
  padding: 1rem;
  margin: 1.5rem 0rem;
  background: transparent;
  .active {
    background-color: rgba(104, 93, 216, 1);
    color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 255, 0.5);
  }
  .normal {
    background: transparent;
    color: #000;
  }
  .normal:hover {
    color: rgb(104, 93, 216);
    background: rgba(104, 92, 216, 0.1);
    box-shadow: 0 0 6px rgba(0, 0, 255, 0.5);
  }
  .on {
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    border: none;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: all 0.5s linear;
  }
`;
const Tabs = styled.section`
  padding: 1rem 2rem;
`;

function Tab() {
  const tabs = ["profile", "projects", "history", "certifications", "contact"];
  const [tab, setTab] = useState(tabs[0]);

  return (
    <div>
      <Nav>
        <div
          className={tab === tabs[0] ? "active on" : "normal on"}
          onClick={() => setTab(tabs[0])}
        >
          <span>
            {tab !== tabs[0] ? (
              <Icon icon={<IconUserSearch stroke={2} />} />
            ) : (
              <Icon icon={<IconUserSearch stroke={2} />} color="#f1f1f1" />
            )}
          </span>
          <span>Profile</span>
        </div>
        <div
          className={tab === tabs[1] ? "active on" : "on normal"}
          onClick={() => setTab(tabs[1])}
        >
          <span>
            {tab !== tabs[1] ? (
              <Icon icon={<IconLayout2 stroke={2} />} />
            ) : (
              <Icon icon={<IconLayout2 stroke={2} />} color="#f1f1f1" />
            )}
          </span>
          <span>Projects</span>
        </div>
        <div
          className={tab === tabs[2] ? "active on" : "on normal"}
          onClick={() => setTab(tabs[2])}
        >
          <span>
            {tab !== tabs[2] ? (
              <Icon icon={<IconHistoryToggle stroke={2} />} />
            ) : (
              <Icon icon={<IconHistoryToggle stroke={2} />} color="#f1f1f1" />
            )}
          </span>
          <span>Employment History</span>
        </div>
        <div
          className={tab === tabs[3] ? "active on" : "on normal"}
          onClick={() => setTab(tabs[3])}
        >
          <span>
            {tab !== tabs[3] ? (
              <Icon icon={<IconRosetteDiscountCheck stroke={2} />} />
            ) : (
              <Icon
                icon={<IconRosetteDiscountCheck stroke={2} />}
                color="#f1f1f1"
              />
            )}
          </span>
          <span>Certifications</span>
        </div>
        <div
          className={tab === tabs[4] ? "active on" : "on normal"}
          onClick={() => setTab(tabs[4])}
        >
          <span>
            {tab !== tabs[4] ? (
              <Icon icon={<IconPhone stroke={2} />} />
            ) : (
              <Icon icon={<IconPhone stroke={2} />} color="#f1f1f1" />
            )}
          </span>
          <span>Contact</span>
        </div>
      </Nav>
      <Tabs>
        {tab === tabs[0] && <Profile />}
        {tab === tabs[1] && <Projects />}
        {tab === tabs[2] && <History />}
        {tab === tabs[3] && <Certifications />}
        {tab === tabs[4] && <Contact />}
      </Tabs>
    </div>
  );
}

export default Tab;
