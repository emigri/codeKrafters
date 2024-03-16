import Developers from "../SiteContent.json";

const developers = Developers.developers;

function MeetOurTeam() {
  return (
    <div className=" bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our team!
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a team of five developers that work with HTML, CSS,
            Javascript and React
          </p>
          {developers.map((developer) => {
            return (
              <>
                <a
                  href="#"
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src="#"
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {developer}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Junior Developer
                    </p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeam;
