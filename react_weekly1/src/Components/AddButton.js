import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

export default function AddButton (props) {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [tags, setTags] = useState([]);

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addLink = () => {
        props.onAddLinkProps(name, url, tags);
        setName("");
        setUrl("");
        setTags([]);
    };

    const onTagChange = (i,e ) => {
      const newTags = tags.slice();
      newTags[i] = {
        name: e.currentTarget.value,
      };
      setTags(newTags);
    }

    return (
    <>
        <Button variant="outline-warning" onClick={handleShow}>
            Add a link
        </Button>

        <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
                <Modal.Title>Add Link</Modal.Title>
            </Modal.Header>
        
            <Modal.Body >
                <h5 className="mb-3">Add your link here </h5>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Some Website" 
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Link</Form.Label>
                <Form.Control type="text" placeholder="http://somewebsite.com" 
                value={url}
                onChange={(e) => setUrl(e.currentTarget.value)}/>
                </Form.Group>

            </Form>

           {tags && tags.length > 0
            ? tags.map((tag, i) => {
                return (
                  <input
                    key={i}
                    type="text"
                    value={tag.name}
                    onChange={(e) => onTagChange(i, e)}
                  />
                );
              })
            : ""}

                   <Button
            variant="secondary"
            onClick={() => setTags(tags.concat([{ name: "" }]))}
          >
            Add Tag
          </Button>

            </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Never mind
          </Button>

          <Button variant="outline-warning" onClick={addLink}>
            Let's add this link
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
};

