module.exports = function (RED) {
	"use strict";
	
	var kafka = require('kafka-node');
	
	/* 
	Kafka Producer Parameters:
		- topics
		- zkquorum
			- example:
				- zkquorum = "[host]:2181"
	*/
	
	function kafkaProducer(config) {
		RED.nodes.createNode(this, config);	
		
		var node = this;
		var topic = config.topic;
		var topics = config.topics;
		var clusterZookeeper = config.zkquorum;
		
		var HighLevelProducer = kafka.HighLevelProducer;
		var Client = kafka.Client;
		var client = new Client(clusterZookeeper);
		
		try {
			this.on("input", function (msg) {
				var payloads = [];
				var key = msg.topic.toString();
				//check if there are multiple topics
				if (msg.topic.indexOf(',') > -1) {
					var topicArray = msg.topic.split(',');
					
					for (i = 0; i < topicArray.length; i++) {
						payloads.push({topic: topicArray[i], messages: msg.payload});
					}
				} else {
					payloads = [{topic: msg.topic, messages: msg.payload}];
				}
				
				producer.send(payloads, function (err, data) {
					if (err) {
						node.error(err);
					}
					node.log("Message Sent: " + data);
				});
			});
		} catch (e) {
			node.error(e);
		}
		var producer = new HighLevelProducer(client);
	}

	RED.nodes.registerType("Kafka Producer", kafkaProducer);
};