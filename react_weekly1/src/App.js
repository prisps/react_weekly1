import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import AddButton from './Components/AddButton';
import LinkList from './Components/LinkList';
import SearchBar from './Components/SearchBar';
import ClearAll from './Components/ClearAll';

function App() {
  const storedLinks = localStorage.getItem("links");
  const parseLinks = storedLinks === "" || storedLinks === null
    ? []
    : JSON.parse(storedLinks);

  const [links,
    setLink] = useState(Array.isArray(parseLinks)
    ? parseLinks
    : []);

  //add button (link)
  const onAddLink = (name, url, tags) => {
    const newLinks = links.concat([
      {
        name,
        url,
        tags
      }
    ]);
    setLink(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
  };

  //search
  const [search, setSearch] = useState("");
  const onSearchChange = (search) => { setSearch(search) };

  const filteredLinks = (search) => {
    const lowerCaseSearch = search.toLowerCase();
    return links.filter((link) => {
      return (link.name.toLowerCase().indexOf(lowerCaseSearch) !== -1 || link.url.toLowerCase().indexOf(lowerCaseSearch) !== -1 || link.tags.map((tag) => {
        return tag
          .name
          .toLowerCase()
          .indexOf(lowerCaseSearch) !== -1;
      }).indexOf(true) !== -1)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1>NSFW links</h1>
        <br/>
        <Container>
          <Row>
            <Col>
              <AddButton onAddLinkProps={onAddLink}/>
            </Col>
            <Col>
              <SearchBar onSearchChangeProp={onSearchChange}/>
              <h5>search results for {search}</h5>
              <LinkList links={filteredLinks(search)}/>
              <p>{links.length} links saved</p>
              <ClearAll/>
            </Col>
          </Row>
        </Container>

      </header>
    </div>
  );
}

export default App;
