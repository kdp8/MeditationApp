const Question = ({ label, q, ans, setAns, options }) => {
  return (
    <div className="mb-3">
      {/* <label className="text-base font-semibold text-gray-900">{label}</label> */}
      <p className="text-sm text-gray-500">{q}</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {options.map((notificationMethod, i) => (
            <div
              key={`${notificationMethod.title}_${i}_${label}`}
              className="flex items-center"
            >
              <input
                id={`${notificationMethod.title}_${i}_${label}`}
                checked={ans === notificationMethod.value ? true : false}
                onChange={(e) => setAns(notificationMethod.value)}
                name={`${notificationMethod.title}_${i}_${label}`}
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={`${notificationMethod.title}_${i}_${label}`}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
export default Question;
