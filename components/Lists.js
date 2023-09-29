// import Link from "next/link";

// import InputET from "./InputET";


// import {
//     CheckCircleIcon,
//     StarIcon,
// } from "@heroicons/react/20/solid";

const statuses = { Completed: 'text-green-400 bg-green-400/10', Error: 'text-rose-400 bg-rose-400/10' }


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const List = (props) => {
    const dateHandler = (date) => {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
        const year = dateObj.getFullYear();
        return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
    };


    const dateTimeHandler = (date) => {
        const dateObj = new Date(date);
        const day = dateObj.getDate();
        const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
        const year = dateObj.getFullYear();
        const hour = dateObj.getHours();
        const month = dateObj.getMonth();
        return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year + "," + (hour <= 9 ? "0" : "") + hour + ":" + (month <= 9 ? "0" : "") + month;
    };
    const listType = (type) => {
        switch (type) {
            // case "tableList":
            //     return (
            //         <div>
            //             <div className="mt-8 flex flex-col">
            //                 <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            //                     <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            //                         <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            //                             <table className="min-w-full divide-y divide-gray-300">
            //                                 <thead className="bg-gray-50">
            //                                     <tr>
            //                                         <th
            //                                             scope="col"
            //                                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            //                                         >
            //                                             Name
            //                                         </th>
            //                                         <th
            //                                             scope="col"
            //                                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            //                                         >
            //                                             Title
            //                                         </th>
            //                                         <th
            //                                             scope="col"
            //                                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            //                                         >
            //                                             Status
            //                                         </th>
            //                                         <th
            //                                             scope="col"
            //                                             className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            //                                         >
            //                                             Role
            //                                         </th>
            //                                         <th
            //                                             scope="col"
            //                                             className="relative py-3.5 pl-3 pr-4 sm:pr-6"
            //                                         >
            //                                             <span className="sr-only">Edit</span>
            //                                         </th>
            //                                     </tr>
            //                                 </thead>
            //                                 <tbody className="divide-y divide-gray-200 bg-white">
            //                                     {props.data.map((person, idx) => (
            //                                         <tr key={idx}>
            //                                             <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
            //                                                 <div className="flex items-center">
            //                                                     <div className="h-10 w-10 flex-shrink-0">
            //                                                         <img
            //                                                             className="h-10 w-10 rounded-full"
            //                                                             src={person.image}
            //                                                             alt=""
            //                                                         />
            //                                                     </div>
            //                                                     <div className="ml-4">
            //                                                         <div className="font-medium text-gray-900">
            //                                                             {person.name}
            //                                                         </div>
            //                                                         <div className="text-gray-500">
            //                                                             {person.email}
            //                                                         </div>
            //                                                     </div>
            //                                                 </div>
            //                                             </td>
            //                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            //                                                 <div className="text-gray-900">
            //                                                     {person.title}
            //                                                 </div>
            //                                                 <div className="text-gray-500">
            //                                                     {person.department}
            //                                                 </div>
            //                                             </td>
            //                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            //                                                 <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
            //                                                     Active
            //                                                 </span>
            //                                             </td>
            //                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            //                                                 {person.role}
            //                                             </td>
            //                                             <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
            //                                                 <a
            //                                                     href="#"
            //                                                     className="text-indigo-600 hover:text-indigo-900"
            //                                                 >
            //                                                     Edit
            //                                                     <span className="sr-only">, {person.name}</span>
            //                                                 </a>
            //                                             </td>
            //                                         </tr>
            //                                     ))}
            //                                 </tbody>
            //                             </table>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     );
            case "allPolls":
                return (
                    <div className="border-t border-white/10 pt-11">
                        <h2 className="px-4 text-base font-semibold leading-7 text-white sm:px-6 lg:px-8">Latest activity</h2>
                        <table className="mt-6 w-full whitespace-nowrap text-left">
                            <colgroup>
                                <col className="w-full sm:w-4/12" />
                                <col className="lg:w-4/12" />
                                <col className="lg:w-2/12" />
                                <col className="lg:w-1/12" />
                                <col className="lg:w-1/12" />
                            </colgroup>
                            <thead className="border-b border-white/10 text-sm leading-6 text-white">
                                <tr>
                                    <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">
                                        User
                                    </th>
                                    <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold sm:table-cell">
                                        Commit
                                    </th>
                                    <th scope="col" className="py-2 pl-0 pr-4 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                                        Status
                                    </th>
                                    <th scope="col" className="hidden py-2 pl-0 pr-8 font-semibold md:table-cell lg:pr-20">
                                        Duration
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden py-2 pl-0 pr-4 text-right font-semibold sm:table-cell sm:pr-6 lg:pr-8"
                                    >
                                        Deployed at
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {props.activityItems.map((item) => (
                                    <tr key={item.commit}>
                                        <td className="py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                                            <div className="flex items-center gap-x-4">
                                                <img src={item.user.imageUrl} alt="" className="h-8 w-8 rounded-full bg-gray-800" />
                                                <div className="truncate text-sm font-medium leading-6 text-white">{item.user.name}</div>
                                            </div>
                                        </td>
                                        <td className="hidden py-4 pl-0 pr-4 sm:table-cell sm:pr-8">
                                            <div className="flex gap-x-3">
                                                <div className="font-mono text-sm leading-6 text-gray-400">{item.commit}</div>
                                                <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                                                    {item.branch}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 pl-0 pr-4 text-sm leading-6 sm:pr-8 lg:pr-20">
                                            <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                                <time className="text-gray-400 sm:hidden" dateTime={item.dateTime}>
                                                    {item.date}
                                                </time>
                                                <div className={classNames(statuses[item.status], 'flex-none rounded-full p-1')}>
                                                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                                </div>
                                                <div className="hidden text-white sm:block">{item.status}</div>
                                            </div>
                                        </td>
                                        <td className="hidden py-4 pl-0 pr-8 text-sm leading-6 text-gray-400 md:table-cell lg:pr-20">
                                            {item.duration}
                                        </td>
                                        <td className="hidden py-4 pl-0 pr-4 text-right text-sm leading-6 text-gray-400 sm:table-cell sm:pr-6 lg:pr-8">
                                            <time dateTime={item.dateTime}>{item.date}</time>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
        }
    };
    return listType(props.type);
};

export default List;
