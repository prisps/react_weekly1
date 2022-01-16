export default function LinkList(props) {
return (
    <>
    {props.links && props.links.length > 0 
        ? props.links.map((link, i) => (
        <div key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
                {" "}
                {link.name}{" "}
            </a>
            {link.tags && link.tags.length > 0 
            ? link.tags.map((tag, i) => 
            <p key={i}> {tag.name} </p>)
        : ""}
        </div>
        )) 
        : "No Links added"}
    </>
);
}

  