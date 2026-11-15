import LineItem from "@/components/LineItem";
import LineItemLeadership from "@/components/LineItemLeadership";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/christ_little_ones.jpg" />
      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Will Shoemaker" />
        <LineItemLeadership left="Organist" right="Melody Williams" />
        <LineItemLeadership left="Chorister" right="Julie Clement" />

        <div className="p-8 my-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Love Share Invite, November Operative Practice - "Arrange to have the missionaries teach a lesson on member missionary work during: Family Home Evenings, Missionary Visits to Members, and/or At Missionary Meal Times."
            </li>
            <li className="pt-1">
              Missionary Meal Signup. (
              <a
                href="https://www.signupgenius.com/go/10C0F4FADAE2DA7F5CE9-64697089-missionary#/"
                className="text-sky-600 hover:text-sky-800 underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up here
              </a>
              ). Double check for current food allergies.
            </li>
            <li className="pt-1">
              Ward Temple Night is on November 24 at the 6:15 pm session.
            </li>
            <li className="pt-1">
              Bishop&apos;s Hang Out: Cereal Sunday. All priests and young women
              class 16-18 are invited to the Shumway&apos;s home on the third
              Sunday of each month from 7:00-8:30 pm.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 3pm in the Relief Society room.
            </li>
          </ol>
        </div>

        <LineItem
          left="Opening Hymn"
          middle="Come, All Ye Saints of Zion"
          right="38"
          link="https://www.churchofjesuschrist.org/media/music/songs/come-all-ye-saints-of-zion?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="Reverently and Meekly Now"
          right="185"
          link="https://www.churchofjesuschrist.org/media/music/songs/reverently-and-meekly-now?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        <LineItemBold middle="Primary Program" />

        {/*
        <LineItem left="Speaker" right="Rad Huffaker" />
        <LineItem left="Speaker" right="Sara Shoemaker" />

        <LineItem
          left="Intermediate Hymn"
          middle="Let the Holy Spirit Guide"
          right="143"
          link="https://www.churchofjesuschrist.org/media/music/songs/let-the-holy-spirit-guide-shaw?lang=eng"
        />

        <LineItem left="Speaker" right="Nicholas Wallace" />
        */}

        <LineItem
          left="Closing Hymn"
          middle="Teach Me To Walk In the Light"
          right="304"
          link="https://www.churchofjesuschrist.org/media/music/songs/teach-me-to-walk-in-the-light?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>
      <ServicesFooter />
    </div>
  );
}
