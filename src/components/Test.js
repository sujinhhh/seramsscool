import React from "react";

const Bible = ({ scriptures, deleteScrip }) => {
  const BibleList = scriptures.map((scripture) => {
    return scripture.id > 0 ? (
      <div className="collection" key={scripture.id}>
        {/* <div>ID: {scripture.id}</div> */}
        <br />
        <div className="container">
          <div>Name: {scripture.Name}</div>
          <div>Chapter: {scripture.Chapter}</div>
          <div>Verse: {scripture.Verse}</div>
          <div>Contents: {scripture.Conternts}</div>
        </div>
        <br />
        <button
          className="right waves-effect waves-light btn-small"
          onClick={() => {
            deleteScrip(scripture.id);
          }}
        >
          Delete
        </button>
      </div>
    ) : null;
  });
  return <div className="bible-list">{BibleList}</div>;
};

export default Bible;
