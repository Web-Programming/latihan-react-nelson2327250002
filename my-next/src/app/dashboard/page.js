import Link from "next/link";

export default function Page(){
    return(
        <div>
            <h1>This is dashboard Page</h1>
            <hr/>
            &bull; <Link href="dashboard/users/Nur Rachmat/001001">Nur Rachmat</Link><br/>
            &bull; <Link href="dashboard/users/Felix/002002">Felix</Link>
        </div>
    );
}