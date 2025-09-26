import { ModalContext } from "../../context/ModalProvider";

import { Footer } from "../../components";
import { useState, useContext } from "react";
import {
  Wrapper,
  TabContent,
  CompanyName,
  Address,
  BoardList,
  BoardRow,
  BoardMember,
  BoardPhoto,
  MemberName,
  MemberPosition,
  TabHeader,
  TabButton,
  ContactInfo,
} from "./style";

import dir from "../../assets/about/dir.png";
import ceo from "../../assets/about/minette.png";
import cio from "../../assets/about/reda.png";
import cfo from "../../assets/about/gil.png";
import md from "../../assets/about/lani.png";

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState<"munus" | "ligala">("munus");

  return (
    <Wrapper id="contact">
      {/* <Container>
        <Title>
          Your office is getting <br /> ready for you.
        </Title>
        <Actions>
          <ButtonOutlined href="mailto:access@mymunus.com">
            Ask us more
          </ButtonOutlined>
          <Button href="https://ligala.mymunus.com/">Open an Office</Button>
        </Actions>
      </Container>
      <Footer /> */}
      <ContactInfo>
        <TabHeader>
          <TabButton
            active={activeTab === "munus"}
            onClick={() => setActiveTab("munus")}
          >
            MUNUS
          </TabButton>
          <TabButton
            active={activeTab === "ligala"}
            onClick={() => setActiveTab("ligala")}
          >
            LIGALA
          </TabButton>
        </TabHeader>

        {activeTab === "munus" && (
          <TabContent>
            <CompanyName>MUNUS TECH PTE. LTD.</CompanyName>
            <Address>
              339B Sembawang Close, #03-09, Sun Trellis Building, Singapore
              7522339
            </Address>
            <Address>
              <b>UEN:</b> 202520724N
            </Address>
            <BoardList>
              <BoardRow>
                <BoardMember>
                  <BoardPhoto src={ceo} alt="CEO" />
                  <MemberName>Maria Theresa Ramos</MemberName>
                  <MemberPosition>Chief Executive Officer</MemberPosition>
                </BoardMember>
              </BoardRow>
              <BoardRow>
                <BoardMember>
                  <BoardPhoto src={cfo} alt="CFO" />
                  <MemberName>Gil Somblingo</MemberName>
                  <MemberPosition>Chief Financial Officer</MemberPosition>
                </BoardMember>
                <BoardMember>
                  <BoardPhoto src={cio} alt="CIO" />
                  <MemberName>Reda Marie Ricamara - Talusig</MemberName>
                  <MemberPosition>Chief Information Officer</MemberPosition>
                </BoardMember>
                <BoardMember>
                  <BoardPhoto src={md} alt="MD" />
                  <MemberName>Lani Culaton-Billena</MemberName>
                  <MemberPosition>Managing Director</MemberPosition>
                </BoardMember>
              </BoardRow>
            </BoardList>
          </TabContent>
        )}

        {activeTab === "ligala" && (
          <TabContent>
            <CompanyName>LIGALA TECH PTE. LTD.</CompanyName>
            <Address>
              339 Sembawang Close, #03-09, Sun Trellis Building, Singapore
              7522339
            </Address>
            <Address>
              <b>UEN:</b> 202523287Z
            </Address>
            <BoardList>
              <BoardRow>
                <BoardMember>
                  <BoardPhoto src={ceo} alt="CEO" />
                  <MemberName>Maria Theresa Ramos</MemberName>
                  <MemberPosition>Chief Executive Officer</MemberPosition>
                </BoardMember>
              </BoardRow>
              <BoardRow>
                <BoardMember>
                  <BoardPhoto src={cfo} alt="CFO" />
                  <MemberName>Gil Somblingo</MemberName>
                  <MemberPosition>Chief Financial Officer</MemberPosition>
                </BoardMember>
                <BoardMember>
                  <BoardPhoto src={cio} alt="CIO" />
                  <MemberName>Reda Marie Ricamara</MemberName>
                  <MemberPosition>Chief Information Officer</MemberPosition>
                </BoardMember>
                <BoardMember>
                  <BoardPhoto src={md} alt="MD" />
                  <MemberName>Lani Culaton-Billena</MemberName>
                  <MemberPosition>Managing Director</MemberPosition>
                </BoardMember>
                <BoardMember>
                  <BoardPhoto src={dir} alt="Director" />
                  <MemberName>Maria Lourdes Sitaca</MemberName>
                  <MemberPosition>Director</MemberPosition>
                </BoardMember>
              </BoardRow>
            </BoardList>
          </TabContent>
        )}
      </ContactInfo>
      <Footer />
    </Wrapper>
  );
};

export default ContactUs;
