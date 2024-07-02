import React, { useEffect, useReducer, useState } from "react"
import { Table } from "../../libs/roducks/components/Table"
import { usePeople } from "./hooks/usePeople"
import { DeleteRow } from "./DeleteRow"
import { Grid, GridItem } from "src/libs/roducks/components/Grid"
import { MARGIN, PADDING } from "src/libs/roducks/components/Roducks"
import img1 from "src/assets/images/419803129_786240400208653_869053175409976837_n.jpg"
import img2 from "src/assets/images/419927213_786240386875321_8545013163808655374_n.jpg"
import img3 from "src/assets/images/420016764_786240396875320_221296866019787185_n.jpg"
import { Card, CardHeader, CardFooter } from "src/libs/roducks/components/Card"
import { LikeIcon } from "src/libs/roducks/components/LikeIcon"
import { Button } from "src/libs/roducks/components/Button"
import { Image } from "src/libs/roducks/components/Image"
import "./style.scss"

const cardsReducer = (state, action) => {
  switch (action.type) {
    case "setData": {
      return action.payload
    }
    case "setLike": {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            like: !item.like,
          }
        }

        return item
      })
    }
    default: {
      return state
    }
  }
}

export const Home = ({ title = "Home" }: HomeProps) => {
  const { state, getData, onSort, unsetPeople } = usePeople()
  const [cards, setCards] = useReducer(cardsReducer, [])

  const setLike = (id: string) => {
    setCards({ type: "setLike", payload: id })
  }

  const setData = (data) => {
    setCards({
      type: "setData",
      payload: data,
    })
  }

  useEffect(() => {
    setData([
      {
        id: "one",
        image: img1,
        title: "Living Room",
        description: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi
            felis, rutrum non magna id, molestie condimentum metus. Proin ut
            erat in massa posuere porttitor.,
          </p>
        ),
        isLiked: false,
        likes: 99,
        total: "55M+",
      },
      {
        id: "two",
        image: img2,
        title: "TV Area",
        description: (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi
            felis, rutrum non magna id, molestie condimentum metus. Proin ut
            erat in massa posuere porttitor.,
          </p>
        ),
        isLiked: false,
        likes: 99,
        total: null,
      },
      {
        id: "three",
        image: img3,
        title: "Dining Room",
        description: <p>Lorem ipsum dolor sit amet,,</p>,
        isLike: false,
        likes: 99,
        total: null,
      },
      {
        id: "four",
        image: img3,
        title: "Dining Room",
        description: (
          <p>
            Pellentesque posuere magna ut commodo euismod. Sed sapien ex,
            commodo non pulvinar nec, tempus id magna. Ut egestas sagittis
            neque,
          </p>
        ),
        isLiked: false,
        likes: 349,
        total: null,
      },
      // {
      //   id: "five",
      //   image: img3,
      //   title: "Dining Room",
      //   description: (
      //     <p>
      //       Pellentesque posuere magna ut commodo euismod. Sed sapien ex,
      //       commodo non pulvinar nec, tempus id magna. Ut egestas sagittis
      //       neque,
      //     </p>
      //   ),
      //   isLiked: false,
      //   likes: 99,
      //   total: null,
      // },
    ])
  }, [])

  const COLUMNS: Array<TableColumn<People>> = [
    {
      title: "ID",
      field: "id",
      sort: true,
    },
    {
      title: "Name",
      field: "name",
      sort: true,
    },
    {
      title: "",
      field: "id",
      sort: false,
      render: (row) => {
        return (
          <DeleteRow
            onDelete={() => {
              unsetPeople(row)
            }}
          />
        )
      },
    },
  ]

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <>
      <Grid columns={cards.length} responsive wrap className={PADDING._05rem}>
        {cards.map((card) => {
          return (
            <GridItem key={card.id}>
              <Card key={card.id} shadow>
                <CardHeader>
                  <Image src={card.image} />
                  <Grid right>
                    <GridItem>
                      <LikeIcon
                        icon={"heart"}
                        isActive={card.isLiked}
                        onLike={() => {
                          setLike(card.id)
                        }}
                        counter={card.likes}
                        likes={card.total}
                      />
                    </GridItem>
                  </Grid>
                  <h2>{card.title}</h2>
                  {card.description}
                </CardHeader>
                <CardFooter>
                  <Grid right>
                    <Button
                      label="More"
                      color="red"
                      onClick={() => {}}
                      className={MARGIN.right._1rem}
                    />
                    <Button label="More" color="blue" onClick={() => {}} />
                  </Grid>
                </CardFooter>
              </Card>
            </GridItem>
          )
        })}
      </Grid>

      <button
        onClick={() => {
          console.log(cards)
        }}
      >
        DATA
      </button>

      <div className="home">
        <Grid responsive className={MARGIN.bottom._1rem}>
          <GridItem width={80} className="test">
            <div className={PADDING._2rem}>80%</div>
          </GridItem>
          <GridItem width={20}>
            <div className={PADDING._2rem}>20%</div>
          </GridItem>
        </Grid>

        <Grid responsive className={MARGIN.bottom._1rem}>
          <GridItem width={20}>
            <div className={PADDING._2rem}>20%</div>
          </GridItem>
          <GridItem width={80} className="test">
            <div className={PADDING._2rem}>80%</div>
          </GridItem>
        </Grid>

        <Grid className={MARGIN.bottom._1rem}>
          <GridItem className="test">
            <div className={PADDING._2rem}>LEFT</div>
          </GridItem>
          <GridItem>
            <div className={PADDING._2rem}>RIGHT</div>
          </GridItem>
        </Grid>

        <Grid className={MARGIN.bottom._1rem} right>
          <GridItem>
            <div className={PADDING._2rem}>RIGHT ONLY</div>
          </GridItem>
        </Grid>

        <Grid className={MARGIN.bottom._1rem} responsive>
          <GridItem>
            <div className={PADDING._2rem}>LEFT</div>
          </GridItem>
          <GridItem>
            <div className={PADDING._2rem}>CENTER</div>
          </GridItem>
          <GridItem>
            <div className={PADDING._2rem}>RIGHT</div>
          </GridItem>
        </Grid>

        <Grid columns={2} className={MARGIN.bottom._1rem}>
          <GridItem className="test">
            <Grid centered>
              <GridItem>
                <div className={PADDING._2rem}>50%</div>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Grid centered>
              <GridItem>
                <div className={PADDING._2rem}>50%</div>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>

        <Grid columns={3} responsive className={MARGIN.bottom._1rem}>
          <GridItem>
            <Grid centered>
              <GridItem>
                <div className={PADDING._2rem}>33%</div>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Grid centered>
              <GridItem>
                <div className={PADDING._2rem}>33%</div>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Grid centered>
              <GridItem>
                <div className={PADDING._2rem}>33%</div>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </div>

      {/* <h2>{title}</h2>
      {state.isLoaded ? (
        <Table<People>
          columns={COLUMNS}
          data={state.people}
          sort={state.sort}
          onSort={(column: keyof People, direction: Sort) => {
            onSort({
              column,
              direction,
            })
          }}
        />
      ) : (
        "Loading ..."
      )} */}
    </>
  )
}
