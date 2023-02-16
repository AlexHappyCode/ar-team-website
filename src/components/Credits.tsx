export type ICreditsProps = Record<string, never>

const Credits = (props: ICreditsProps) => {
  return (
    <div>
      <h1>Multiplayer Game Development</h1>
      <h2>CSC 631</h2>
      <br></br>
      <h5>
        <div className="text-info">Team Lead:</div> Alexander Pena
      </h5>
      <h5>
        <div className="text-info">Game Designer:</div> Scott Nguyen
      </h5>
      <h5>
        <div className="text-info">Unknown Role:</div> Christine J'usrey
      </h5>
      <h5>
        <div className="text-info">Unknown Role:</div> Eduardo Hernandez
      </h5>
      <h5>
        <div className="text-info">Unknown Role:</div> Mark Ceazar Diaz
      </h5>
      <br></br>
      <h2>Sound Crew</h2>
      <h5>Nicolás Fernández</h5>
      <h5>Sydney</h5>
    </div>
  )
}

export default Credits
