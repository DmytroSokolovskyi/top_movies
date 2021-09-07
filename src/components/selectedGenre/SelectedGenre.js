
export default function SelectedGenre({item: {id, name}}) {

    return (
            <option value={id}>{name}</option>
    );
}
