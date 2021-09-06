import Companie from "../companie/Companie";

export default function Companies({companies}) {
    return (
        <>
            {companies && companies.map(value => <Companie key={value.id} companie={value}/>)}
        </>

    );
}
