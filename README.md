
#node-red-conrtib-kafka-producer
Kafka Producer can produce messages to the specified kafka cluster topic(s) on NodeRED.

##Install
Install from npm

`npm install -g node-red-contrib-kafka-producer`

###Prerequisites
Node-RED platform. (see Node-RED)
Kafka cluster (see Kafka).
Zookeeper Server.
Some topics (see How to create a topic)

Here's the basics of how to get the Kafka Node Producer working using the kafka quickstart documentation.

#Quick Start

##Step 1: Download the code for Kafka

Download a recent stable release.
```
tar xzf kafka-<VERSION>.tgz
cd kafka-<VERSION>
./sbt update
./sbt package
```

##Step 2: Start the server

Kafka brokers and consumers use this for co-ordination.
First start the zookeeper server. You can use the convenience script packaged with kafka to get a quick-and-dirty single-node zookeeper instance.

`bin/zookeeper-server-start.sh config/zookeeper.properties`

Open a new terminal window and start the Kafka server:
`bin/kafka-server-start.sh config/server.properties`


##Step 3: Send some messages

Kafka comes with a command line client that will take input from standard in and send it out as messages to the Kafka cluster. 
By default each line will be sent as a separate message. 
The topic test is created automatically when messages are sent to it. Omitting logging you should see something like this:

`bin/kafka-console-producer.sh --zookeeper localhost:2181 --topic Topic(s)`

##Step 4: Start a consumer

Kafka also has a command line consumer that will dump out messages to standard out. 
You can use this to confirm your data is being received. 
Change the Topic(s) value to your input.
`bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic Topic(s) --from-beginning`

#Usage

###Parameters:
- **Name**: The Name for reference
- **ZkQuarum**: The ZooKeeper quorum of Kafka cluster. (The default is localhost:2181)
- **Topics**: The topic of the message to produce.

Author
Josh Williams - 23joshwilliams@gmail.com
