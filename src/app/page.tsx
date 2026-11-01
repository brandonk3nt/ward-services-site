import LineItem from "@/components/LineItem";
import LineItemLeadership from "@/components/LineItemLeadership";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/bethseda.jpeg" />
      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Bishop Shumway" />
        <LineItemLeadership left="Organist" right="Chris Cooley" />
        <LineItemLeadership left="Chorister" right="Laurel Cronin" />

        <div className="p-8 my-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Primary Program Practice will be held on November 14, 2026 from 9:00-10:30 am in the chapel.
            </li>
            <li className="pt-1">
              Love Share Invite, November Operative Practice - "Arrange to have the missionaries teach a lesson on member missionary work during: Family Home Evenings, Missionary Visits to Members, and/or At Missionary Meal Times."
            </li>
            <li className="pt-1">
              Tithing Declaration is in progress. (
              <a
                href="https://www.signupgenius.com/go/10C0F4EAEA82AA2FBC43-65636091-2026"
                className="text-sky-600 hover:text-sky-800 underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up here
              </a>
              )
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
          middle="Praise to the Lord, the Almighty"
          right="72"
          link="https://www.churchofjesuschrist.org/media/music/songs/praise-to-the-lord-the-almighty?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="We'll Sing All Hail to Jesus' Name"
          right="182"
          link="https://www.churchofjesuschrist.org/media/music/songs/well-sing-all-hail-to-jesus-name?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        <LineItemBold middle="Bearing of Testimonies" />

        {/*
        <LineItem left="Speaker" right="McKenzie Shoemaker" />
        <LineItem left="Speaker" right="Caden Clifford" />

        <LineItem
          left="Intermediate Hymn"
          middle="Let Us Oft Speak Kind Words"
          right="232"
          link="https://www.churchofjesuschrist.org/media/music/songs/let-us-oft-speak-kind-words?lang=eng"
        />

        <LineItem left="Speaker" right="MaryAnn Kaberry" />
        */}

        <LineItem
          left="Closing Hymn"
          middle="I Need Thee Every Hour"
          right="98"
          link="https://www.churchofjesuschrist.org/media/music/songs/i-need-thee-every-hour?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>
      <ServicesFooter />
    </div>
  );
}
