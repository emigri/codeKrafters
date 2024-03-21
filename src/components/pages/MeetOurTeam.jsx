import Developers from "../SiteContent.json";

const developers = Developers.developers;

function MeetOurTeam() {
  return (
    <div className="container mx-auto py-24 sm:py-32">
        <div className="container my-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our team!
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We are a team of five developers that work with HTML, CSS,
            Javascript and React
          </p>
        </div>
        <div className="devs">
          {developers.map((developer) => {
            return (
              <>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200  shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="#"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 key={developer} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {developer}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      codeKrafter Developer
                    </p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
    </div>
  );
}

export default MeetOurTeam;
