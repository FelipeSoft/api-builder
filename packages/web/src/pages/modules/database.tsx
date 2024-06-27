import { BlockOption } from "@/components/block-option";
import MainLayout from "@/components/layouts/main-layout"
import ModuleLayout from "@/components/layouts/module-layout"
import Image from "next/image";
import { useEffect, useState } from "react";

type SelectedDatabase = "mysql" | "postgresql" | "mss" | "oracle" | "sqll" | "mariadb" | "sqljs" | "mongodb" | "cassandra";

const Database = () => {
    const [selectedDatabase, setSelectedDatabase] = useState<SelectedDatabase | null>(null);

    return (
        <MainLayout>
            <ModuleLayout currentTab={7} titleTab="Database">
                <div className="mt-8 mb-4">
                    <h2 className="dark:text-neutral-400 text-neutral-600 font-semibold flex items-center gap-2">Dialect Type</h2>
                    <p className="text-sm text-neutral-500">Choose from the different database dialects available, whether relational or non-relational.</p>
                </div>
                <nav>
                    <ul className="grid grid-cols-3 gap-4">
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("mysql")}
                                checked={selectedDatabase === "mysql"}
                                title="MySQL"
                                image={
                                    <Image
                                        src={"/images/mysql.png"}
                                        alt={"mysql image"}
                                        width={75}
                                        height={75}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("postgresql")}
                                checked={selectedDatabase === "postgresql"}
                                title="PostgreSQL"
                                image={
                                    <Image
                                        src={"/images/postgresql.png"}
                                        alt={"postgresql image"}
                                        width={140}
                                        height={140}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("mss")}
                                checked={selectedDatabase === "mss"}
                                title="Microsoft SQL Server"
                                image={
                                    <Image
                                        src={"/images/mss.png"}
                                        alt={"microsoft sql server image"}
                                        width={70}
                                        height={70}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("mariadb")}
                                checked={selectedDatabase === "mariadb"}
                                title="MariaDB"
                                image={
                                    <Image
                                        className="mt-4"
                                        src={"/images/mariadb.png"}
                                        alt={"mariadb image"}
                                        width={70}
                                        height={70}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("sqll")}
                                checked={selectedDatabase === "sqll"}
                                title="SQL Lite"
                                image={
                                    <Image
                                        src={"/images/sqllite.png"}
                                        alt={"mariadb image"}
                                        width={120}
                                        height={120}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("oracle")}
                                checked={selectedDatabase === "oracle"}
                                title="Oracle"
                                image={
                                    <Image
                                        src={"/images/oracle.png"}
                                        alt={"oracle database image"}
                                        width={120}
                                        height={120}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("sqljs")}
                                checked={selectedDatabase === "sqljs"}
                                title="SQL.js"
                                image={
                                    <Image
                                        src={"/images/sqljs.png"}
                                        alt={"sqljs image"}
                                        width={60}
                                        height={60}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("mongodb")}
                                checked={selectedDatabase === "mongodb"}
                                title="MongoDB"
                                image={
                                    <Image
                                        src={"/images/mongodb.png"}
                                        alt={"mongodb image"}
                                        width={80}
                                        height={80}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                        <li className="h-[170px]">
                            <BlockOption
                                onClick={() => setSelectedDatabase("cassandra")}
                                checked={selectedDatabase === "cassandra"}
                                title="Cassandra"
                                image={
                                    <Image
                                        src={"/images/cassandra.png"}
                                        alt={"cassandra image"}
                                        width={150}
                                        height={150}
                                    >
                                    </Image>
                                }
                            ></BlockOption>
                        </li>
                    </ul>
                </nav>
            </ModuleLayout>
        </MainLayout>
    )
}

export default Database;