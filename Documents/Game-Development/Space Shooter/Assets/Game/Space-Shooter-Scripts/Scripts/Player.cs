using System.Collections;
using System.Collections.Generic;
using UnityEngine;

//based on udemy course "The Ultimate Guide to Game Development" by Jonathan Weinberger

public class Player : MonoBehaviour
{
    [SerializeField]
    private GameObject _laserPrefab;
    [SerializeField]
    private GameObject _tripleShotPrefab;

    [SerializeField]
    private float _fireSpeed = 0.20f;
    private float _fireLimit = 0.0f;

    [SerializeField]
    private float _speed = 10.0f;

    public bool canTripleShot = false;

    // Start is called before the first frame update
    private void Start()
    {
        transform.position = new Vector3(0,0,0);
    }

    // Update is called once per frame
    private void Update()
    {
        Movement();
        if(Input.GetKeyDown(KeyCode.Space) || Input.GetMouseButton(0)){
            fireUp();   
        }
    }

    private void fireUp(){
        
            if(Time.time > _fireLimit){
            //fire up
                if(canTripleShot){
                    Instantiate(_tripleShotPrefab, transform.position, Quaternion.identity);
                }
                else{ //one shot
                Instantiate(_laserPrefab, transform.position + new Vector3(0, 0.82f, 0), Quaternion.identity);
                }              
                _fireLimit = Time.time + _fireSpeed;
            }
        
    }

    private void Movement(){
        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");
        transform.Translate(Vector3.right * Time.deltaTime * _speed * horizontalInput);
        transform.Translate(Vector3.up * Time.deltaTime * _speed * verticalInput);

        // set bounds on movements
        if(transform.position.y > 4.2f)
        {
            transform.position = new Vector3(transform.position.x, 4.2f, 0);
        }
        else if(transform.position.y < -4.2f)
        {
            transform.position = new Vector3(transform.position.x, -4.2f, 0);
        }

        if(transform.position.x < -14.27072f)
        {
            transform.position = new Vector3(12.97464f, transform.position.y, 0);
        }
        else if(transform.position.x > 12.97464f)
        {
            transform.position = new Vector3(-14.27072f, transform.position.y, 0);
        }
    }
}