import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Heading = (props) => {
    const headingType = (type) => {
        switch (type) {
            case "headingh2ViewMore":
                return (
                    <div className="flex px-4  justify-between items-center sm:px-6 lg:px-8">
                        <h2 className="text-base font-semibold leading-7 text-white">Recent activity</h2>
                        <Link href='#'>view All</Link>
                    </div>
                )
        }
    };
    return headingType(props.type);
};

export default Heading;
