<template> 
    <div class="one">
        <div v-for="diag in diagram" :key="diag.id" class="tree">
            <q-btn color="red" text-color="white" glossy unelevated icon="delete" @click="$emit('removeDi',diag)"/>
            <ul>
                <li>
                    <input type="text" name="" id="">
                    <ul>
                        <li><input type="text" name="" id=""></li>
                        <li><input type="text" name="" id=""></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div v-for="diagBig in diagramBig" :key="diagBig.id" class="tree">
            <q-btn color="red" text-color="white" glossy unelevated icon="delete" @click="$emit('removeDiBig',diagBig)"/>
            <ul>
                <li>
                    <input type="text" name="" id="">
                    <ul>
                        <li><input type="text" name="" id="">
                            <ul>
                                <li><input type="text" name="" id=""></li>
                                <li><input type="text" name="" id=""></li>
                            </ul>
                        </li>
                        <li><input type="text" name="" id="">
                            <ul>
                                <li><input type="text" name="" id=""></li>
                                <li><input type="text" name="" id=""></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        diagram: {
            type: Array
        },
        diagramBig: {
            type: Array
        }
    }
}
</script>

<style scoped>
* {margin: 0; padding: 0;}

.one {
    display: flex;
    margin-top: 30px;
    flex-wrap: wrap;
}

.tree {
    border: 2px solid gray;
    margin-left: 10px;
    padding: 10px;
    border-radius: 15px;
}

.tree ul {
	padding-top: 20px; position: relative;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}

.tree li {
	float: left; text-align: center;
	list-style-type: none;
	position: relative;
	padding: 20px 5px 0 5px;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}

/*We will use ::before and ::after to draw the connectors*/

.tree li::before, .tree li::after{
	content: '';
	position: absolute; top: 0; right: 50%;
	border-top: 1px solid #ccc;
	width: 50%; height: 20px;
}
.tree li::after{
	right: auto; left: 50%;
	border-left: 1px solid #ccc;
}

/*We need to remove left-right connectors from elements without 
any siblings*/
.tree li:only-child::after, .tree li:only-child::before {
	display: none;
}

/*Remove space from the top of single children*/
.tree li:only-child{ padding-top: 0;}

/*Remove left connector from first child and 
right connector from last child*/
.tree li:first-child::before, .tree li:last-child::after{
	border: 0 none;
}
/*Adding back the vertical connector to the last nodes*/
.tree li:last-child::before{
	border-right: 1px solid #ccc;
	border-radius: 0 5px 0 0;
	-webkit-border-radius: 0 5px 0 0;
	-moz-border-radius: 0 5px 0 0;
}
.tree li:first-child::after{
	border-radius: 5px 0 0 0;
	-webkit-border-radius: 5px 0 0 0;
	-moz-border-radius: 5px 0 0 0;
}

/*Time to add downward connectors from parents*/
.tree ul ul::before{
	content: '';
	position: absolute; top: 0; left: 50%;
	border-left: 1px solid #ccc;
	width: 0; height: 20px;
}

.tree li input{
	border: 1px solid #ccc;
	padding: 5px 10px;
	text-decoration: none;
	color: #666;
	font-family: arial, verdana, tahoma;
	font-size: 11px;
	display: inline-block;
	
	border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	
	transition: all 0.5s;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
}

/*Time for some hover effects*/
/*We will apply the hover effect the the lineage of the element also*/
.tree li input:hover, .tree li input:hover+ul li input {
	background: #c8e4f8; color: #000; border: 1px solid #94a0b4;
}
/*Connector styles on hover*/
.tree li input:hover+ul li::after, 
.tree li input:hover+ul li::before, 
.tree li input:hover+ul::before, 
.tree li input:hover+ul ul::before{
	border-color:  #94a0b4;
}

input {
    width: 100px;
}

@media screen and (width < 850px) {
    .tree {
        margin-left: 10px;
        margin-top: 10px;
    }

    .one {
        justify-content: center;
    }

    .tree input {
        width: 55px;
    }
}
</style>