package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
  r := gin.Default()

  r.GET("/", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "status": "online",
    })
  })

  r.GET("/threads", func(c *gin.Context) {

    // Get recent threads from DB with reddit-like ranking algorithm

    // c.JSON(http.StatusOK, gin.H{
    //   "status": "online",
    // })
  })

  r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}