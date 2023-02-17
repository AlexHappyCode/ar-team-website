export type ICreditsProps = Record<string, never>

const Credits = (props: ICreditsProps) => {
  return (
    <div id="credits" className="text-white m-4 display-3">
      <h1 className="display-2">Multiplayer Game Development</h1>
      <h2>CSC 631</h2>
      <br></br>
      <h5 className="display-5">
        <div className="text-info">Team Lead:</div> Alexander Pena
      </h5>
      <h5 className="display-5">
        <div className="text-info">Game Designer:</div> Scott Nguyen
      </h5>
      <h5 className="display-5">
        <div className="text-info">Role TBD:</div> Christine J'usrey
      </h5>
      <h5 className="display-5">
        <div className="text-info">Role TBD:</div> Eduardo Hernandez
      </h5>
      <h5 className="display-5">
        <div className="text-info">Role TBD:</div> Mark Ceazar Diaz
      </h5>
      <br></br>
      <h2 className="display-4 text-primary">
        <b>Sound Crew</b>
      </h2>
      <h5 className="display-5">Nicolás Fernández</h5>
      <h5 className="display-5">Sydney Roberts</h5>
    </div>
  )
}

export default Credits
