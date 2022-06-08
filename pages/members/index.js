/* eslint-disable @next/next/no-img-element */
import { SiteHeader } from "../../components/SiteHeader";
import { Nav } from "../../components/Nav";
import { DynamicHead } from "../../components/DynamicHead";
import axios from "axios";
import router from "next/router";

const url = "https://edwardtanguay.netlify.app/share/employees.json";

export async function getServerSideProps() {
  const members = (await axios.get(url)).data;
  return {
    props: {
      members,
    },
  };
}

const handleClickMember = (member) => {
  router.push(`/members/${member.employeeID}`);
};

export default function Members({ members }) {
  return (
    <div className="page_members">
      <DynamicHead
        title="Members"
        description="People who make the tech resource site run."
        icon="user.ico"
      />
      <SiteHeader />
      <Nav />
      <code>
        The data on this page is loaded via getServerSideProps() and so is{" "}
        <a href="https://nextjs.org/docs/basic-features/data-fetching/overview">
          server-side rendering (SSR)
        </a>
        .
      </code>
      <p>There are {members.length} members.</p>
      <div className="members">
        {members.map((member, index) => {
          return (
            <div
              key={index}
              className="member"
              onClick={() => handleClickMember(member)}
            >
              <img
                src={`https://edwardtanguay.netlify.app/share/images/employees/employee_${member.employeeID}.jpg`}
                alt={`member: ${member.firstName} ${member.lastName}`}
              />
              <div className="info">
                <div className="name">
                  {member.firstName} {member.lastName}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
