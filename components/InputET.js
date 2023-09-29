
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { Fragment } from "react";
import { Transition, Popover } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


// import { x-mark } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const InputET = (props) => {
  const DropdowonOptions = () => {
    switch (props.placeholder) {
      case "Select Country":
        return (
          <>
            <option value="" disabled>
              Select country
            </option>
            {!!props.displayData &&
              props.displayData.map((item, id) => {
                return (
                  <>
                    <option
                      key={item.id}
                      defaultValue={
                        props.defaultCountry === item.name ? true : false
                      }
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  </>
                );
              })}
          </>
        );
      case "Select State":
        return (
          <>
            <option value="" disabled>
              Select state
            </option>
            {props.states &&
              props.states.map((item, id) => {
                return (
                  item.country_name === props.selectedCountry && (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  )
                );
              })}
          </>
        );
      case "Select City":
        return (
          <>
            <option value="" disabled>
              Select City
            </option>
            {!!props.displayData &&
              props.displayData.map((item, id) => {
                return (
                  item.state === props.selectedState && (
                    <option key={item.id} value={item.City}>
                      {item.City}
                    </option>
                  )
                );
              })}
          </>
        );
    }
  };
  const inputType = (type) => {
    switch (type) {
      case "date":
        return (
          <div className="items-center">
            <label
              htmlFor={props.name}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <div className="mt-1">
              <input
                type="date"
                required={props.required}
                placeholder={props.placeholder}
                id={props.label}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                name={props.name}
                min={props.valid}
                onKeyDown={props.onKeyDown}
                max={props.max}
                // autoComplete="on"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "Text":
        return (
          <div className="items-center">
            <label
              htmlFor={props.label}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <div className="mt-1">
              <input
                type="text"
                required={props.required}
                placeholder={props.placeholder}
                id={props.label}
                value={props.value}
                maxLength={props.maxLength}
                disabled={props.disabled}
                onChange={props.onChange}
                name={props.name}
                min={props.valid}
                onKeyDown={props.onKeyDown}
                // autoComplete="on"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "email":
        return (
          <div className="items-center">
            <label
              htmlFor={props.label}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <div className="my-1 ">
              <input
                id={props.label}
                name={props.name}
                required={props.required}
                disabled={props.disabled}
                type="email"
                autoComplete="email"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "dropdown":
        return (
          <div className="cursor-pointer">
            <label
              htmlFor={props.label}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <select
              id={props.label}
              className={`block w-full mt-1 cursor-pointer rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
                 ${props.error
                  ? "border-red-500 focus:ring-orange-500 bg-red-100"
                  : "focus:border-indigo-500 focus:ring-indigo-500 bg-white"
                }`}
              value={props.value}
              name={props.name}
              disabled={props.disabled}
              required={props.required}
              onChange={props.onChange}
            >
              <option value="" defaultValue={props.selected} disabled>
                {props.defaultValue}
              </option>
              {props.data.map((item, idx) => {
                return (
                  <option
                    className="text-sm text-gray-700 cursor-pointer"
                    key={idx}
                  >
                    {item.name || item.keywords_type}
                  </option>
                );
              })}
            </select>
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "search":
        return (
          <form className="flex flex-1" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              {props.label}
            </label>
            <div className="relative w-full">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500"
                aria-hidden="true"
              />
              <input
                id="search-field"
                className="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm"
                placeholder="Search..."
                type="search"
                name={props.name}
                onChange={props.onChange}
              />
            </div>
          </form>
        );
      case "file":
        return (
          <div className="sm:col-span-6 ">
            <label
              htmlFor={props.label || "file-upload"}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <label
              htmlFor={props.label || "file-upload"}
              className={`mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6
                ${props.error
                  ? "border-red-500 focus:ring-orange-500"
                  : "focus:border-indigo-500 focus:ring-indigo-500"
                }`}
            >
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm justify-center text-gray-600">
                  <label
                    htmlFor={props.label || "file-upload"}
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="text-center">Upload a file</span>
                    <input
                      id={props.label || "file-upload"}
                      multiple={props.multiple}
                      required={props.required}
                      value={props.value}
                      accept={props.accept}
                      onChange={props.onChange}
                      disabled={props.disabled}
                      name={props.name || "file-upload"}
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">{props.description}</p>
                <p className="text-xs text-gray-500">{props.sizeDescription}</p>
              </div>
            </label>
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "inputWithCheckBox":
        return (
          <>
            <div className="items-center">
              <label
                htmlFor={props.label}
                className="block text-sm font-medium text-gray-700"
              >
                {props.label}
                {props.required ? <span className="text-red-500"> *</span> : ""}
              </label>
              <div className="mt-1">
                <div className="flow-root">
                  <Popover.Group className="w-full  divide-gray-200">
                    <Popover className=" relative block text-left ">
                      <Popover.Button
                        className={`flex justify-between w-full rounded-md border-gray-300 p-2 border  outline-indigo-500  sm:text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${props.error
                          ? "border-red-500 focus:ring-red-500"
                          : !props.disable
                            ? "focus:border-indigo-500 focus:ring-1  "
                            : "opacity-60"
                          }`}
                      >
                        <span> Select Stream</span>

                        <ChevronDownIcon
                          className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="origin-top-right absolute right-0 mt-2 z-10 w-full  bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {props.data?.map((option, optionIdx) => (
                              <div
                                className={`${props.disable
                                  ? "pointer-events-none opacity-80"
                                  : ""
                                  }`}
                              >
                                <div
                                  key={optionIdx}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${optionIdx}`}
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:border-indigo-500 cursor-pointer	"
                                    onChange={() => {
                                      props.priorityCheckboxHandler(option);
                                    }}
                                    checked={props.checkedPriority?.some(
                                      (item) => item === option.name
                                    )}
                                  />

                                  <label
                                    htmlFor={`filter-${optionIdx}`}
                                    className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap cursor-pointer	hover:text-indigo-500"
                                  >
                                    {option.name}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </Popover.Group>
                </div>
              </div>
            </div>
          </>
        );

      case "ArticleSectionCheckBox":
        return (
          <>
            <div className="items-center">
              <label
                htmlFor={props.label}
                className="block text-sm font-medium text-gray-700"
              >
                {props.label}
                {props.required ? <span className="text-red-500"> *</span> : ""}
              </label>
              <div className="mt-1">
                <div className="flow-root">
                  <Popover.Group className="w-full  divide-gray-200">
                    <Popover className=" relative block text-left ">
                      <Popover.Button
                        className={`flex justify-between w-full rounded-md border-gray-300 p-2 border  outline-indigo-500  sm:text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${props.error
                          ? "border-red-500 focus:ring-red-500"
                          : !props.disable
                            ? "focus:border-indigo-500 focus:ring-1  "
                            : "opacity-60"
                          }`}
                      >
                        <span> Select Section</span>

                        <ChevronDownIcon
                          className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="origin-top-right absolute right-0 mt-2 z-10 w-full  bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {props.data?.map((option, optionIdx) => (
                              <div
                                className={`${props.disable
                                  ? "pointer-events-none opacity-80"
                                  : ""
                                  }`}
                              >
                                <div
                                  key={optionIdx}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${optionIdx}`}
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:border-indigo-500 cursor-pointer	"
                                    onChange={() => {
                                      props.priorityCheckboxHandler(option);
                                    }}
                                    checked={props.checkedPriority?.some(
                                      (item) => item === option.parentid
                                    )}
                                  />

                                  <label
                                    htmlFor={`filter-${optionIdx}`}
                                    className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap cursor-pointer	hover:text-indigo-500"
                                  >
                                    {option.Title}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </Popover.Group>
                </div>
              </div>
            </div>
          </>
        );
      case "textareasecond":
        return (
          <div>
            <label
              htmlFor={props.label}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <div className="mt-1">
              <textarea
                id={props.label}
                name={props.name}
                required={props.required}
                rows={props.rows ? props.rows : 5}
                className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
                ${props.error
                    ? "border-red-500 focus:ring-orange-500"
                    : "focus:border-indigo-500 focus:ring-indigo-500"
                  }`}
                defaultValue={props.defaultValue}
                value={props.value}
                onChange={props.onChange}
                maxLength={props.maxLength}
                disabled={props.disabled}
                placeholder={props.placeholder}
              />
            </div>
            <div className="flex justify-between">
              <p className="mt-2 text-sm text-gray-500">{props.hint}</p>
              <p className="mt-2 text-sm text-gray-500">{props.wordcount}</p>
            </div>
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "radio":
        return (
          <div className="flex items-center">
            <input
              id={props.label}
              name={props.name}
              type="radio"
              value={props.value}
              required={props.required}
              disabled={props.disabled}
              checked={props.data === props.value}
              onChange={props.onChange}
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor={props.label}
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
          </div>
        );
      case "checkbox":
        return (
          <div className="relative flex items-center">
            <div className="flex h-5 items-center">
              <input
                id={props.label}
                name={props.name}
                type="checkbox"
                value={props.value}
                required={props.required}
                disabled={props.disabled}
                checked={props.checked}
                onChange={props.onChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor={props.label}
                className="font-medium text-gray-700"
              >
                {props.label}
                {props.required ? <span className="text-red-500"> *</span> : ""}
              </label>
              <span
                id={props.name}
                className="block text-sm text-gray-600 "
              >
                {props.description}
              </span>
            </div>
          </div>
        );
      case "phone":
        return (
          <div className="">
            <label
              htmlFor={props.label}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <div className="flex mt-1">
              <div className="mr-1 text-gray-500 cursor-pointer ">
                <label htmlFor={props.codeLabel} className="sr-only">
                  {props.label}
                </label>

                <select
                  id={props.codeLabel}
                  name={props.codeLabel}
                  required={props.required}
                  disabled={props.disabled}
                  onChange={props.onSelectChange}
                  value={props.countryCodeValue}
                  className="block border-gray-300 h-10 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 cursor-pointer"
                >
                  {props.phonecode.map((item, idx) => (
                    <option key={idx} className={"cursor-pointer"}
                      defaultValue={
                        props.defaultValue === item.dial_code ? true : false
                      }
                    >
                      {item.dial_code}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                id={props.label}
                name={props.name}
                required={props.required}
                disabled={props.disabled}
                onChange={props.onChange}
                value={props.value}
                maxLength={props.maxLength}
                className="block w-full rounded-md h-10 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="+91 (000) 000-000"
              />
            </div>
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "profilePhoto":
        return (
          <div>
            <div
              // htmlFor={props.dateLabel}
              className="block text-sm mb-2 font-medium text-gray-700"
            >
              {props.labelHead}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </div>
            <div className="h-16 w-16 flex justify-center items-center text-2xl font-semibold">
              <div className="relative">
                <div className="h-16 w-16 rounded-full text-white bg-slate-400 text-2xl font-bold flex items-center justify-center">
                  {!props.showProfileImage ? (
                    <span className="h-12 w-12 overflow-hidden rounded-full">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                  ) : (
                    <img
                      src={props.showProfileImage}
                      alt={""}
                      className="h-full w-full bg-contain rounded-full"
                    />
                  )}
                </div>

                <div className="cursor-pointer">
                  <label
                    htmlFor={props.id}
                    className="absolute top-4 left-20 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                  >
                    {props.label}
                  </label>
                  <input
                    type="file"
                    id={props.id}
                    required={props.required}
                    disabled={props.disabled}
                    className="w-0 absolute top-24 left-24 opacity-0"
                    onChange={props.onChange}
                  />
                </div>
              </div>
            </div>
            {/*  <div className={"block text-sm font-medium text-red-700 ml-1"}>
                  {props.required ? "required" : ""}
                </div> */}
          </div>
        );
      case "Dropdowncounts":
        return (
          <div className={"cursor-pointer"}>
            <label
              htmlFor={props.label}
              className={"block text-sm font-medium text-gray-700"}
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <select
              id={props.label}
              value={props.value}
              placeholder={props.placeholder}
              name={props.name}
              disabled={props.disabled}
              required={props.required}
              onChange={props.onChange}
              className={`block w-full mt-1 cursor-pointer rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
               ${props.error
                  ? "border-red-500 focus:ring-orange-500 bg-red-100"
                  : "focus:border-indigo-500 focus:ring-indigo-500 bg-white"
                }`}
            >
              {DropdowonOptions()}
            </select>
          </div>
        );
      case "time":
        return (
          <div className="items-center">
            <label
              htmlFor={props.dateLabel}
              className="block text-sm font-medium text-gray-700"
            >
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </label>
            <div className="mt-1">
              <input
                type="time"
                id={props.dateLabel}
                value={props.value}
                onChange={props.onChange}
                onInput={props.onInput}
                disabled={props.disabled}
                name={props.name}
                min={props.valid}
                required={props.required}
                // autoComplete="on"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <span className={"block text-sm font-medium text-red-700"}>
              {props.error}
            </span>
          </div>
        );
      case "inputsuggestion":
        return (
          <Combobox
            as="div"
            value={props.selectedPerson}
            onChange={props.setSelectedPerson}
          >
            <Combobox.Label className="block text-sm font-medium text-gray-700">
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </Combobox.Label>
            <div className="relative mt-1">
              <Combobox.Input
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                onChange={(event) => props.setQuery(event.target.value)}
                required={props.required}
                placeholder={props.placeholder}
                displayValue={(person) =>
                  person?.CollegeName ||

                  person?.name ||
                  person?.counsellorName ||
                  person?.InstituteName ||
                  person?.AlumniName ||
                  person?.Title ||
                  person?.City ||
                  person?.WidgetSection ||
                  person?.CourseName ||
                  person?.AuthorName ||
                  person?.collegeName ||
                  person?.CompanyName ||
                  person?.Name ||
                  person?.BankName ||
                  props.query
                }
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
              {props.filteredPeople.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {props.filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      value={person}
                      disabled={props.disabled}
                      className={({ active }) =>
                        classNames(
                          "relative cursor-pointer select-none py-2 pl-3 pr-9",
                          active ? "bg-indigo-600 text-white" : "text-gray-900"
                        )
                      }
                    >
                      {({ active, selected }) => (
                        <>
                          <span
                            className={classNames(
                              "block truncate",
                              selected && "font-semibold"
                            )}
                          >
                            {person.CollegeName ||
                              person.counsellorName ||
                              person.InstituteName ||
                              person.name ||
                              person.collegeName ||
                              person.AuthorName ||
                              person.Title ||
                              person.CompanyName ||
                              person.WidgetSection ||
                              person.AlumniName ||
                              person.Name ||
                              person.BankName ||
                              person.CourseName}
                          </span>
                          {selected && (
                            <span
                              className={classNames(
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                                active ? "text-white" : "text-indigo-600"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
        );
      case "inputsuggestionCities":
        return (
          <Combobox
            as="div"
            value={props.selectedPerson}
            onChange={props.setSelectedPerson}
          >
            <Combobox.Label className="block text-sm font-medium text-gray-700">
              {props.label}
              {props.required ? <span className="text-red-500"> *</span> : ""}
            </Combobox.Label>
            <div className="relative mt-1">
              <Combobox.Input
                className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                onChange={(event) => props.setQuery(event.target.value)}
                required={props.required}
                placeholder={props.placeholder}
                displayValue={(person) =>
                  person?.CollegeName ||

                  person?.City ||
                  person?.counsellorName ||
                  person?.InstituteName ||
                  person?.AlumniName ||
                  person?.Title ||
                  person?.City ||
                  person?.WidgetSection ||
                  person?.CourseName ||
                  person?.AuthorName ||
                  person?.collegeName ||
                  person?.CompanyName ||
                  person?.Name ||
                  person?.BankName ||
                  props.query
                }
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
              {props.filteredPeople.length > 0 && (
                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {props.filteredPeople.filter((item) => item.City.toLowerCase().includes(props.query.toLowerCase())).map((person) => (
                    <Combobox.Option
                      key={person.id}
                      value={person.City}
                      disabled={props.disabled}
                      className={({ active }) =>
                        classNames(
                          "relative cursor-pointer select-none py-2 pl-3 pr-9",
                          active ? "bg-indigo-600 text-white" : "text-gray-900"
                        )
                      }
                    >
                      {({ active, selected }) => (
                        <>
                          <span
                            className={classNames(
                              "block truncate",
                              selected && "font-semibold"
                            )}
                          >
                            {person.CollegeName ||
                              person.counsellorName ||
                              person.InstituteName ||
                              person.City ||
                              person.collegeName ||
                              person.AuthorName ||
                              person.Title ||
                              person.CompanyName ||
                              person.WidgetSection ||
                              person.AlumniName ||
                              person.Name ||
                              person.BankName ||
                              person.CourseName}
                          </span>
                          {selected && (
                            <span
                              className={classNames(
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                                active ? "text-white" : "text-indigo-600"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              )}
            </div>
          </Combobox>
        );
      default:
        break;
    }
  };
  return <div>{inputType(props.type)}</div>;
};

export default InputET;
