<?php

class LinkedList
{
    private ?object $head = null;
    private ?object $tail = null;

    public function append(mixed $value): void
    {
        $newNode = $this->createNewNode($value);

        if ($this->tail) {
            $this->tail->next = $newNode;
        }

        $this->tail = $newNode;

        if (!$this->head) {
            $this->head = $newNode;
        }
    }

    public function prepend(mixed $value): void
    {
        $newNode = $this->createNewNode($value, $this->head);
        $this->head = $newNode;
        if (is_null($this->tail)) {
            $this->tail = $newNode;
        }
    }

    public function find(mixed $value)
    {
        if (!$this->head) {
            return null;
        }

        $currentNode = $this->head;

        while ($currentNode) {
            if ($currentNode->value === $value) {
                return $currentNode->value;
            }
            $currentNode = $currentNode->next;
        }

        return null;
    }

    public function delete(mixed $value): void
    {
        if (!$this->head) {
            return;
        }

        while ($this->head && $this->head->value == $value) {
            $this->head = $this->head->next;
        }

        $currentNode = $this->head;

        while ($currentNode && $currentNode->next) {
            if ($currentNode->next->value == $value) {
                $currentNode->next = $currentNode->next->next;
            } else {
                $currentNode = $currentNode->next;
            }
        }

        if ($this->tail->value === $value) {
            $this->tail = $currentNode;
        }
    }

    private function createNewNode(mixed $value, $next = null): stdClass
    {
        $newNode = new \stdClass();
        $newNode->value = $value;
        $newNode->next = $next;

        return $newNode;
    }

    public function toArray(): array
    {
        $nodeLists = [];
        $currentNode = $this->head;
        while ($currentNode) {
            $nodeLists[] = $currentNode->value;
            $currentNode = $currentNode->next;
        }
        return $nodeLists;
    }
}

$linkedList = new LinkedList();
$linkedList->append('name: shaikh alamin');
$linkedList->append('email: alamin.cse15@gmail.com');
$linkedList->append('expert in :');
$linkedList->append('php');
$linkedList->append('node');
$linkedList->append('react,vue');
$linkedList->append('mysql,redis');
$linkedList->append('docker,linux');
$linkedList->append('rabbitmq,kafka');
$linkedList->append('lazy=delete');
$linkedList->prepend('senior software engineer');
$linkedList->delete('lazy=delete');

print_r($linkedList->toArray());

print_r($linkedList->find('react,vue'));

echo "\n";
