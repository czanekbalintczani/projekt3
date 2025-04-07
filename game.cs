using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class BusGame : MonoBehaviour
{
    public GameObject bus;
    public float speed = 5f;
    public List<GameObject> obstacles;
    public List<GameObject> stops;
    public Text scoreText;
    private int score = 0;
    private bool gameRunning = true;

    void Update()
    {
        if (!gameRunning) return;

        float moveY = Input.GetAxis("Vertical") * speed * Time.deltaTime;
        bus.transform.Translate(0, moveY, 0);
        
        CheckCollisions();
    }

    void CheckCollisions()
    {
        foreach (GameObject obs in obstacles)
        {
            if (bus.GetComponent<Collider2D>().bounds.Intersects(obs.GetComponent<Collider2D>().bounds))
            {
                GameOver();
            }
        }

        foreach (GameObject stop in stops)
        {
            if (bus.GetComponent<Collider2D>().bounds.Intersects(stop.GetComponent<Collider2D>().bounds))
            {
                stops.Remove(stop);
                Destroy(stop);
                score += 10;
                UpdateScore();
            }
        }
    }

    void UpdateScore()
    {
        scoreText.text = "Score: " + score;
    }

    void GameOver()
    {
        gameRunning = false;
        scoreText.text = "Game Over! Score: " + score;
    }
}
