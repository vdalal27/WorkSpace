using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//based on udemy course "The Ultimate Guide to Game Development" by Jonathan Weinberger

public class Laser : MonoBehaviour
{
    [SerializeField]
    private float _speed = 10.0f;
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        transform.Translate(Vector3.up * _speed * Time.deltaTime);

        //destroy laser object at 5.45f
        if(transform.position.y>=5.45f){
            Destroy(this.gameObject);
        }
    }
}
