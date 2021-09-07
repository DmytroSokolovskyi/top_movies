import Companie from "../companie/Companie";

export default function Companies({companies}) {

    console.log("    CompanCompanies    ")

    return (
        <>
            {companies && companies.map(value => <Companie key={value.id} companie={value}/>)}
        </>

    );
}
