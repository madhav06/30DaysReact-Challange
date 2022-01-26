import React from "react";
import image from "./images/expand-vertical-4.svg";

import { Collapsible } from "./components/Collapsible/Collapsible";

class App extends React.Component() {
  render() {
    return (
      <div>
        <header>
          <img src={image} alt="React 101" />
          <h1>Collapsible Content</h1>
        </header>
        <div className="content">
          <div className="panel-group">
            <Collapsible title="Overview">
              <p>Lorem ipsum</p>
            </Collapsible>

            <Collapsible title="Features">
              <p>Anim pariatur cliche reprhenchete</p>
            </Collapsible>

            <Collapsible title="Software">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus laboriosam optio libero nobis repudiandae possimus,
                dolor, doloremque recusandae rerum vitae sunt vero, ducimus
                necessitatibus sequi a voluptates cum ipsam facilis provident
                quia sint unde repellat molestiae maiores? Molestias ad
                excepturi aperiam ipsa nam nesciunt, iure beatae aliquam itaque
                laboriosam mollitia optio pariatur ut nihil molestiae tempora
                suscipit autem eius dolorem totam sapiente quos maxime! Harum
                distinctio ad numquam quam ex nostrum repellendus quibusdam
                possimus accusantium, optio hic doloribus expedita nihil, nulla
                et voluptas minima quidem. Excepturi ab error iusto facilis aut,
                at impedit, rerum velit, tempora ratione, consequatur quas esse
                reprehenderit omnis animi. Quo, tempore. Perspiciatis velit
                eligendi dignissimos, voluptate, temporibus quod libero odit
                explicabo quo. Cupiditate, commodi, libero! Laboriosam facere,
                molestias rerum velit? Eum quaerat, possimus ipsa molestiae non
                quo nesciunt necessitatibus eligendi tenetur sapiente nostrum
                praesentium voluptatibus maxime ex nobis. Ducimus modi accusamus
                voluptates, blanditiis adipisci ipsam. Labore, doloremque
                sapiente? Quae quia, expedita neque dolorem nostrum ratione
                natus at iste architecto, eligendi velit beatae perferendis
                voluptate fugit error. Incidunt esse illo porro, molestias id
                sed, ab eum omnis excepturi dicta consectetur, numquam debitis
                maiores saepe blanditiis, quod!
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
