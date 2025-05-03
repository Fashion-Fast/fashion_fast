import 'package:flutter/material.dart';

class ShopScreen extends StatefulWidget {
  const ShopScreen({super.key});

  @override
  State<ShopScreen> createState() => _ShopScreenState();
}

class _ShopScreenState extends State<ShopScreen> {
  final TextEditingController _searchController = TextEditingController();
  bool availableNow = false;

  final List<String> categories = [
    'Women’s Fashion', 'Men’s Fashion', 'Shoes', 'Accessories',
    'Kids & Baby', 'Beauty & Self-Care', 'Seasonal Picks',
    'New Arrivals', 'Top Rated', 'Local Favorites'
  ];

  final List<Map<String, String>> stores = [
    {'name': 'LOFT', 'type': 'Major Retail', 'image': 'assets/images/store1.png'},
    {'name': 'Primark', 'type': 'Major Retail', 'image': 'assets/images/store2.jpeg'},
    {'name': 'Rainbow', 'type': 'Thrift/Vintage', 'image': 'assets/images/store3.jpeg'},
    {'name': 'H&M', 'type': 'Major Retail', 'image': 'assets/images/store4.png'},
  ];

  final List<String> brands = ['Nike', 'Zara', 'H&M', 'Gucci'];
  final List<String> itemTypes = ['Dresses', 'Sneakers', 'Bags', 'Jeans'];

  String? deliveryTime;
  String? storeType;
  String? priceRange;

  List<Map<String, String>> get filteredStores {
    return stores.where((store) {
      final query = _searchController.text.toLowerCase();
      if (query.isNotEmpty && !store['name']!.toLowerCase().contains(query)) return false;
      if (storeType != null && store['type'] != storeType) return false;
      if (availableNow && store['name']!.contains('Closed')) return false;
      return true;
    }).toList();
  }

  List<String> get searchSuggestions {
    final query = _searchController.text.toLowerCase();
    if (query.isEmpty) return [];
    final suggestions = [
      ...stores.map((store) => store['name']!),
      ...brands,
      ...itemTypes
    ];
    return suggestions.where((entry) => entry.toLowerCase().contains(query)).toSet().toList();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        backgroundColor: Colors.white,
        title: Column(
          children: [
            TextField(
              controller: _searchController,
              style: TextStyle(fontFamily: 'Helvetica', fontSize: 14),
              decoration: InputDecoration(
                hintText: 'Search for brands, stores, or items...',
                hintStyle: TextStyle(color: Colors.grey[400], fontSize: 14),
                prefixIcon: Icon(Icons.search, color: Colors.grey),
                filled: true,
                fillColor: Colors.grey[200],
                contentPadding: EdgeInsets.symmetric(vertical: 12, horizontal: 16),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12.0),
                  borderSide: BorderSide(color: Colors.grey.shade300),
                ),
              ),
              onChanged: (_) => setState(() {}),
            ),
            if (searchSuggestions.isNotEmpty)
              Container(
                margin: const EdgeInsets.only(top: 4),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(10),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.1),
                      blurRadius: 6,
                      offset: Offset(0, 2),
                    ),
                  ],
                ),
                child: ListView(
                  shrinkWrap: true,
                  children: searchSuggestions.map((suggestion) => ListTile(
                    title: Text(
                      suggestion,
                      style: TextStyle(fontFamily: 'Helvetica', fontSize: 14),
                    ),
                    onTap: () {
                      _searchController.text = suggestion;
                      setState(() {});
                    },
                  )).toList(),
                ),
              )
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Wrap(
                spacing: 10,
                runSpacing: 10,
                children: [
                  _buildDropdown('Delivery Time', ['Within 2 Hours', 'Same Day', 'Scheduled Delivery'], (val) => setState(() => deliveryTime = val)),
                  _buildDropdown('Store Type', ['Boutique', 'Major Retail', 'Thrift/Vintage', 'Accessories Only'], (val) => setState(() => storeType = val)),
                  _buildDropdown('Price Range', ['\$0-\$25', '\$25-\$50', '\$50-\$100', '\$100+'], (val) => setState(() => priceRange = val)),
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text('Available Now'),
                      Switch(value: availableNow, onChanged: (val) => setState(() => availableNow = val))
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 20),
              SizedBox(
                height: 40,
                child: ListView(
                  scrollDirection: Axis.horizontal,
                  children: categories.map((cat) => Padding(
                    padding: const EdgeInsets.only(right: 8.0),
                    child: Chip(
                      label: Text(cat, style: TextStyle(fontFamily: 'Helvetica')),
                      backgroundColor: Colors.grey[100],
                    ),
                  )).toList(),
                ),
              ),
              const SizedBox(height: 20),
              GridView.builder(
                shrinkWrap: true,
                physics: NeverScrollableScrollPhysics(),
                itemCount: filteredStores.length,
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  childAspectRatio: 3 / 2,
                ),
                itemBuilder: (context, index) {
                  final store = filteredStores[index];
                  return Card(
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    elevation: 2,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Expanded(
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(16),
                            child: Image.asset(
                              store['image']!,
                              fit: BoxFit.cover,
                              width: double.infinity,
                            ),
                          ),
                        ),
                        SizedBox(height: 8),
                        Text(
                          store['name']!,
                          style: TextStyle(fontFamily: 'Helvetica', fontWeight: FontWeight.w500),
                        ),
                        Text(
                          store['type']!,
                          style: TextStyle(color: Colors.grey),
                        ),
                        SizedBox(height: 6),
                      ],
                    ),
                  );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildDropdown(String label, List<String> options, ValueChanged<String?> onChanged) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 12),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey.shade300),
        borderRadius: BorderRadius.circular(10),
      ),
      child: DropdownButton<String>(
        isExpanded: false,
        underline: SizedBox(),
        hint: Text(label, style: TextStyle(fontWeight: FontWeight.bold, fontFamily: 'Helvetica')),
        value: label == 'Delivery Time' ? deliveryTime : label == 'Store Type' ? storeType : priceRange,
        onChanged: onChanged,
        items: options.map((val) => DropdownMenuItem(value: val, child: Text(val))).toList(),
      ),
    );
  }
}
